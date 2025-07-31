"use client";

import DeleteIconButton from "@/components/buttons/DeleteIconButton";
import { ItemProps } from "@/types";
import { getDaysLeft } from "@/utils/dateFunctions";
import {
  addItemsToLocalStorage,
  getItemFromLocalStorage,
} from "@/utils/localStorageFunctions";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";
import { toast } from "sonner";

type Props = {
  params: Promise<{ id: string }>;
};

const ThingPage = ({ params }: Props) => {
  const { id } = use(params);
  const router = useRouter();

  const data = getItemFromLocalStorage(parseInt(id));

  if (!data) return notFound();

  const { title, deadline, imageUrl } = data;
  const daysLeft = getDaysLeft(deadline);

  const handleDeleteItem = (id: string) => {
    if (typeof window == "undefined") return null;

    const items = localStorage.getItem("items");
    const parsedItems: ItemProps[] = items ? JSON.parse(items) : [];
    const updatedItems = parsedItems.filter(
      (item: ItemProps) => item.id !== parseInt(id)
    );

    addItemsToLocalStorage(updatedItems);

    toast("Stuff has been removed.");
    router.push("/my-things");
  };

  return (
    <>
      <section className="font-sans flex items-center justify-center px-8 py-20 max-w-3xl mx-auto">
        <section className="flex gap-16 items-center flex-col md:flex-row">
          {daysLeft < 0 ? (
            <div className="text-center flex-1/2">
              <h1 className="text-6xl sm:text-7xl font-bold">
                Did you get it?
              </h1>
            </div>
          ) : daysLeft === 0 ? (
            <div className="text-center flex-1/2">
              <h1 className="text-8xl sm:text-9xl font-bold">This is it!</h1>
              <p className="text-xl">Go buy that thing!</p>
            </div>
          ) : (
            <div className="text-center flex-1/2">
              <h1 className="text-8xl sm:text-9xl font-bold">{daysLeft}</h1>
              <p className="text-xl">{daysLeft === 1 ? "day" : "days"} to go</p>
            </div>
          )}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-muted-foreground">
              {title}
            </h2>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="w-full max-h-[400px] object-contain rounded-lg border border-neutral-300 dark:border-neutral-700 shadow-sm"
              />
            )}
          </div>
        </section>
      </section>
      <section className="text-center pb-8">
        <DeleteIconButton handleDelete={() => handleDeleteItem(id)} />
      </section>
    </>
  );
};

export default ThingPage;

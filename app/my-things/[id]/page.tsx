"use client";

import { getDaysLeft } from "@/utils/dateFunctions";
import { getItemFromLocalStorage } from "@/utils/localStorageFunctions";
import { notFound } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const ThingPage = ({ params }: Props) => {
  const { id } = use(params);

  const data = getItemFromLocalStorage(parseInt(id));

  if (!data) return notFound();

  const { title, deadline, imageUrl } = data;
  const daysLeft = getDaysLeft(deadline);

  return (
    <section className="font-sans flex items-center justify-center px-8 py-20">
      <section className="flex gap-16 items-center flex-col md:flex-row">
        <div className="text-center flex-1/2">
          <h1 className="text-8xl sm:text-9xl font-bold">{daysLeft}</h1>
          <p className="text-xl">days to go</p>
        </div>
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
  );
};

export default ThingPage;

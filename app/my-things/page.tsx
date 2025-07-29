"use client";

import ItemCard from "@/components/cards/ItemCard";
import { ItemProps } from "@/types";
import Link from "next/link";

const MyThings = () => {
  if (typeof window === "undefined") return null;
  const items = localStorage.getItem("items");
  const itemsParsed = items ? JSON.parse(items) : [];

  return (
    <section className="font-sans max-w-[1500px] mx-auto pt-14 px-8 pb-40">
      <h1 className="text-5xl font-bold text-center mb-20">My Stuff</h1>

      {itemsParsed.length === 0 && (
        <div className="text-center">
          <p className="text-lg">Nothing has been added yet!</p>
          <div className="mt-12">
            <Link
              href="/add-thing"
              className="cursor-pointer bg-zinc-700 hover:bg-zinc-800 px-10 py-4 rounded-md font-bold"
            >
              Add now!
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {itemsParsed.map((item: ItemProps) => (
          <Link key={item.id} href={`/my-things/${item.id}`}>
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              deadline={item.deadline}
              imageUrl={item.imageUrl}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MyThings;

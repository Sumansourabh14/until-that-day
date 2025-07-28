"use client";

import ItemCard from "@/components/cards/ItemCard";
import { Button } from "@/components/ui/button";
import { ItemProps } from "@/types";
import Link from "next/link";

const MyThings = () => {
  const items = localStorage.getItem("items");
  const itemsParsed = items ? JSON.parse(items) : [];

  return (
    <section className="max-w-[1500px] mx-auto py-14 px-8">
      <h1 className="text-5xl font-bold text-center mb-20">My Things</h1>

      {itemsParsed.length === 0 && (
        <div className="text-center">
          <p className="text-lg">Nothing has been added yet!</p>
          <div className="mt-12">
            <Link
              href="/thing"
              className="cursor-pointer bg-zinc-700 hover:bg-zinc-800 px-10 py-4 rounded-md font-bold"
            >
              Add now!
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {itemsParsed.map((item: ItemProps, index: number) => (
          <ItemCard
            key={index}
            title={item.title}
            deadline={item.deadline}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default MyThings;

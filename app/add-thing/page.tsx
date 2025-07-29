"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ItemProps } from "@/types";
import { addItemsToLocalStorage } from "@/utils/localStorageFunctions";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AddThing() {
  const [title, setTitle] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [items, setItems] = useState<ItemProps[]>([]);

  const addItems = (newItem: ItemProps) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    addItemsToLocalStorage(updatedItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !deadline) return;

    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;

        const newItem = { id: Date.now(), title, deadline, imageUrl: result };
        addItems(newItem);
      };
      reader.readAsDataURL(image);
      toast("Great! Your stuff has been added.");
    } else {
      const newItem = { id: Date.now(), title, deadline };
      addItems(newItem);
      toast("Great! Your stuff has been added.");
    }

    setTitle("");
    setDeadline("");
    setImage(null);
  };

  useEffect(() => {
    const stored = localStorage.getItem("items");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  return (
    <section className="font-sans px-8 pt-12 flex flex-col items-center pb-30">
      <h1 className="text-5xl font-bold text-center">Add Stuff</h1>
      <p className="text-muted-foreground mt-4">
        Have a stuff to buy in your mind? Add it here.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 mt-12">
        <section>
          <label>Name of item</label>
          <Input
            type="text"
            placeholder="What do you want to buy?"
            className="w-full p-3 border rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </section>
        <section>
          <label>Deadline to buy it</label>
          <Input
            type="date"
            className="w-full p-3 border rounded-md"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </section>
        <section>
          <label>Add image</label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full"
          />
        </section>
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto rounded-md shadow"
          />
        )}
        <Button
          type="submit"
          className="w-full py-6 text-lg mt-4 rounded-md font-bold cursor-pointer"
        >
          Add Stuff
        </Button>
      </form>
    </section>
  );
}

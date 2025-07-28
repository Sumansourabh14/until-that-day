import { ItemProps } from "@/types";

export const addItemsToLocalStorage = (items: ItemProps[]) => {
  if (typeof window === "undefined") return null;
  localStorage.setItem("items", JSON.stringify(items));
};

export const addItemToLocalStorage = ({
  id,
  title,
  deadline,
  imageUrl,
}: ItemProps) => {
  if (typeof window === "undefined") return null;

  const item = {
    id,
    title,
    deadline,
    imageUrl,
  };

  localStorage.setItem("item", JSON.stringify(item));
};

export const getItemFromLocalStorage = (id: number) => {
  if (typeof window === "undefined") return null;

  const itemsStringified = localStorage.getItem("items");

  if (!itemsStringified) return null;

  try {
    const items = JSON.parse(itemsStringified);
    return items.find((item: ItemProps) => item.id === id) || null;
  } catch (error) {
    console.error("Failed to parse items:", error);
    return null;
  }
};

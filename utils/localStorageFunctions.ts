import { ItemProps } from "@/types";

export const addItemsToLocalStorage = (items: ItemProps[]) => {
  localStorage.setItem("items", JSON.stringify(items));
};

export const addItemToLocalStorage = ({
  title,
  deadline,
  imageUrl,
}: ItemProps) => {
  const item = {
    title,
    deadline,
    imageUrl,
  };

  localStorage.setItem("item", JSON.stringify(item));
};

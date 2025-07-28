import { ItemProps } from "@/types";

export const addItemsToLocalStorage = (items: ItemProps[]) => {
  localStorage.setItem("items", JSON.stringify(items));
};

export const addItemToLocalStorage = ({
  id,
  title,
  deadline,
  imageUrl,
}: ItemProps) => {
  const item = {
    id,
    title,
    deadline,
    imageUrl,
  };

  localStorage.setItem("item", JSON.stringify(item));
};

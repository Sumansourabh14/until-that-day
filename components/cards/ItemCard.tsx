import { ItemProps } from "@/types";
import { getDaysLeft } from "@/utils/dateFunctions";

const ItemCard = ({ title, deadline, imageUrl }: ItemProps) => {
  const daysLeft = getDaysLeft(deadline);

  return (
    <div className="max-w-2xl w-full bg-white dark:bg-neutral-900 rounded-xl shadow-md p-6 mx-auto space-y-4 border border-neutral-200 dark:border-neutral-700">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{daysLeft} to go</p>
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="w-full max-h-[400px] object-contain rounded-lg border border-neutral-300 dark:border-neutral-700 shadow-sm"
        />
      )}
    </div>
  );
};

export default ItemCard;

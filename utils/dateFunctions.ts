export const getDaysLeft = (deadline: string) => {
  const today = new Date();
  const target = new Date(deadline);
  const diff = Math.ceil(
    (target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  return diff;
};

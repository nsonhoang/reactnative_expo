import { format } from "date-fns";

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formatDateHideWeekday = (date: Date): string => {
  return format(date, "dd/MM/yyyy");
};

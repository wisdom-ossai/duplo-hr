import { type ClassValue, clsx } from "clsx";
import { twMerge, fromTheme } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPallette = (color: string) => {
  console.log(fromTheme("colors"));
  switch (color) {
    case "green":
      return {
        main: fromTheme("colors"),
        light: "",
      };
    case "red":
      return {
        main: "",
        light: "",
      };

    case "amber":
      return {
        main: "",
        light: "",
      };

    default:
      return {
        main: "",
      };
  }
};

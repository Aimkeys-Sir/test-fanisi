import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * merge your tailwind classes
 * @param classes 
 * @returns 
 */
export default function clsm(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}

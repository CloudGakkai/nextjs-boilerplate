export type ClassNamesInput = (string | false | null | undefined | 0)[];

export type ClassNamesOutput = string;

export const clsx = (...classes: ClassNamesInput): ClassNamesOutput => {
  return classes.filter(Boolean).join(" ");
};

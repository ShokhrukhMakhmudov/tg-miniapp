import { ReactNode } from "react";

export type ZodiacDetailsProps = {
  sign: { name: string; ru: string; en: string };
  language: "ru" | "en";
  onClose: () => void;
};

export type Language = "original" | "translated";

export type SelectedZodiac = {
  name: string;
  en: string;
  ru: string;
};

export type ZodiacBlockProps = {
  sign: {
    name: string;
    ru: string;
    en: string;
    icon?: ReactNode;
  };
  onSelect: (sign: SelectedZodiac) => void;
  language: "ru" | "en";
};

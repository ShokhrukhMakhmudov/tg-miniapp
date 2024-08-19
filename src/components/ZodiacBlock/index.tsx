// src/components/ZodiacBlock.tsx

import { FC, ReactNode } from "react";

type ZodiacBlockProps = {
  sign: {
    name: string;
    icon?: ReactNode;
  };
  onSelect: (sign: string) => void;
  language: "ru" | "en";
};

const ZodiacBlock: FC<ZodiacBlockProps> = ({
  sign: { name, icon },
  onSelect,
  language,
}) => {
  return (
    <div className="zodiac-block" onClick={() => onSelect(name)}>
      <div className="zodiac-icon" style={{ color: "#000" }}>
        {icon}
      </div>
      <div className="zodiac-info">
        <h3>{language === "ru" ? name : name}</h3>
      </div>
    </div>
  );
};

export default ZodiacBlock;

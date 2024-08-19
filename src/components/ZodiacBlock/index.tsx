import { FC } from "react";
import { ZodiacBlockProps } from "../../types";

const ZodiacBlock: FC<ZodiacBlockProps> = ({
  sign: { name, ru, en, icon },
  onSelect,
  language,
}) => {
  return (
    <div className="zodiac-block" onClick={() => onSelect({ name, en, ru })}>
      <div className="zodiac-icon" style={{ color: "#000" }}>
        {icon}
      </div>
      <div className="zodiac-info">
        <h3>{language === "ru" ? ru : en}</h3>
      </div>
    </div>
  );
};

export default ZodiacBlock;

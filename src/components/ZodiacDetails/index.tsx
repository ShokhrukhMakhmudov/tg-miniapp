import { useState, useEffect, FC } from "react";
import { fetchHoroscope } from "../../hooks/useHoroscope";
import { Language, ZodiacDetailsProps } from "../../types";

const ZodiacDetails: FC<ZodiacDetailsProps> = ({
  sign,
  language: lang,
  onClose,
}) => {
  const [description, setDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let language: Language = lang === "ru" ? "original" : "translated";
    setLoading(true);
    fetchHoroscope(sign.name.toLowerCase(), language)
      .then((data) => {
        setDescription(data.horoscope);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load horoscope");
        setLoading(false);
      });
  }, [sign, lang]);

  return (
    <div className="zodiac-details">
      <button className="back-button" onClick={onClose}>
        ← {lang === "ru" ? "Назад" : "Back"}
      </button>
      {loading ? (
        <p>{lang === "ru" ? "Загрузка..." : "Loading..."}</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="description">
          <h2>{lang === "ru" ? sign.ru : sign.en}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ZodiacDetails;

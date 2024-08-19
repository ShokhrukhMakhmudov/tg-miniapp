import { useState, useEffect, FC } from "react";
import { fetchHoroscope } from "../../hooks/useHoroscope";

type ZodiacDetailsProps = {
  sign: string;
  language: "ru" | "en";
  onClose: () => void;
};

type Language = "original" | "translated";
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
    fetchHoroscope(sign.toLowerCase(), language)
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
          <h2>{sign}</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ZodiacDetails;

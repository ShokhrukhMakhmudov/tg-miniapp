import React, { useState, useEffect } from "react";
import ZodiacBlock from "./components/ZodiacBlock";
import ZodiacDetails from "./components/ZodiacDetails";
import "./styles/App.css";
import { zodiacSigns } from "./data/zodiacSigns";
import { SelectedZodiac } from "./types";

const tele = window.Telegram.WebApp;

const App: React.FC = () => {
  const [selectedZodiac, setSelectedZodiac] = useState<SelectedZodiac | null>(
    null
  );
  const [language, setLanguage] = useState<"ru" | "en">("ru");

  useEffect(() => {
    tele.ready();
    const userLang = tele?.initDataUnsafe?.user?.language_code;
    setLanguage(userLang === "ru" ? "ru" : "en");
  }, []);

  return (
    <div className="app">
      {!selectedZodiac ? (
        <div className="zodiac-list">
          {zodiacSigns.map((sign) => (
            <ZodiacBlock
              key={sign.name}
              sign={sign}
              onSelect={setSelectedZodiac}
              language={language}
            />
          ))}
        </div>
      ) : (
        <ZodiacDetails
          sign={selectedZodiac}
          language={language}
          onClose={() => setSelectedZodiac(null)}
        />
      )}
    </div>
  );
};

export default App;

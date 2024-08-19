export const fetchHoroscope = async (
  sign: string,
  language: "original" | "translated"
) => {
  const response = await fetch("https://poker247tech.ru/get_horoscope/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      sign,
      language,
      period: "today",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch horoscope");
  }

  const data = await response.json();

  console.log(data);
  return data;
};



const newsList = [
  "Mikołaj Grabowski",
  "graphic designer",
  "welcome! :)",
  "Mikołaj Grabowski",
  "graphic designer",
  "welcome! :)",
  "Mikołaj Grabowski",
  "graphic designer",
  "welcome! :)",
];

function updateNews() {
  const ticker = document.getElementById("news-ticker");
  const newsItems = newsList.map(news => `<span>${news}</span>`).join("");
  
  // Duplicate content to ensure smooth looping
  ticker.innerHTML = newsItems + newsItems;
}

updateNews();


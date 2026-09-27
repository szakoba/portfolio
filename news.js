let siteTitle = document.getElementById("mainframe").title;

const newsList = [
  "MIKOŁAJ KONRAD GRABOWSKI",
  "graphic designer",
  document.getElementById("mainframe").getElementsByTagName("title").innerHTML,
  "welcome! :)",
];

function updateNews() {
  const ticker = document.getElementById("news-ticker");
  const newsItems = newsList.map(news => `<span>${news}</span>`).join("");
  
  // Duplicate content to ensure smooth looping
  ticker.innerHTML = newsItems + newsItems + newsItems + newsItems;
}

updateNews();

const iframe = document.getElementById("mainframe");

iframe.addEventListener("load", function () {
  newsLists[2] = iframe.contentDocument.title;
});
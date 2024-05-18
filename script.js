const apiUrl = "https://coding-week-2024-api.onrender.com/api/data";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (!Array.isArray(data) || data.length < 8) {
      console.error(
        "API response doesn't contain enough data for 8 news items."
      );
      return;
    }

    displayNews(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function displayNews(data) {
  for (let i = 0; i < data.length && i < 11; i++) {
    const news = data[i];
    const newsItem = document.getElementById(`div${i + 1}`);

    if (!newsItem) {
      console.error(`News item element with ID div${i + 1} not found.`);
      continue;
    }

    const dateElement = newsItem.querySelector(".date");
    const headlineElement = newsItem.querySelector(".headline");
    const contentElement = newsItem.querySelector(".content");
    const authorElement = newsItem.querySelector(".author");
    const typeElement = newsItem.querySelector(".type");
    const imageElement = newsItem.querySelector(".image");

    dateElement.textContent = news.date;
    headlineElement.textContent = news.headline;
    contentElement.textContent = news.content;
    authorElement.textContent = `By ${news.author}`;
    typeElement.textContent = news.type;

    if (newsItem) {
      const backgroundImage = `url(${news.image})`;

      newsItem.style.backgroundImage = backgroundImage;
      newsItem.style.backgroundSize = "cover";
      newsItem.style.backgroundPosition = "center";

      if (imageElement) {
        newsItem.style.backgroundImage = "";
        imageElement.style.backgroundImage = backgroundImage;
        imageElement.style.backgroundSize = "cover";
        imageElement.style.backgroundPosition = "center";
      }

    }
  }
}

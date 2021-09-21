const cheerio = require("cheerio");
const axios = require("axios").default;

const getNews = async (query = "top headlines", page = 1) => {
  if (typeof query !== "string") {
    throw "Invalid topic";
  }
  const news = [];
  const res = await axios.get(
    `https://in.news.search.yahoo.com/search?p=${query}&b=${page}`
  );
  const $ = cheerio.load(res.data);
  const newsArticles = $("div.NewsArticle");
  let count = 0;
  newsArticles.each((i, newsArticle) => {
    const title = $(newsArticle).find(".s-title").find("a").text();
    const source = $(newsArticle).find(".s-source").text();
    const time = $(newsArticle).find(".s-time").text();
    const link = $(newsArticle).find(".s-title").find("a").attr("href");
    const description = $(newsArticle).find(".s-desc").text();
    const image =
      count < 4
        ? $(newsArticle).find(".thmb").find(".s-img").attr("src")
        : $(newsArticle).find(".thmb").find(".s-img").attr("data-src");

    news.push({ title, source, time, link, image, description });
    count++;
  });

  return news;
};

module.exports = getNews;

const express = require("express");
const getNews = require("../utils/fetch-articles");

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.get("/getArticles", async (req, res) => {
  let { topic, page } = req.query;
  page = page * 10 - 9;
  const articles = await getNews(topic, page).catch((err) =>
    res.status(400).send(err)
  );
  res.json(articles);
});

router.post("/topic", async (req, res) => {
  const { searchQuery } = req.body;
  const articles = await getNews(searchQuery).catch((err) =>
    res.status(400).send(err)
  );
  res.render("index", {
    articles,
  });
});

module.exports = router;

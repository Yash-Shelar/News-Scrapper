const express = require("express");
const getNews = require("../utils/fetch-articles");
const router = express.Router();

router.get("/", async (req, res) => {
  const articles = await getNews();
  res.render("index", {
    articles,
  });
});

router.get("/sports", async (req, res) => {
  const articles = await getNews("sports");
  res.render("index", {
    articles,
  });
});

router.get("/covid", async (req, res) => {
  const articles = await getNews("covid");
  res.render("index", {
    articles,
  });
});

router.get("/buisness", async (req, res) => {
  const articles = await getNews("buisness");
  res.render("index", {
    articles,
  });
});

router.get("/technology", async (req, res) => {
  const articles = await getNews("technology");
  res.render("index", {
    articles,
  });
});

router.get("/entertainment", async (req, res) => {
  const articles = await getNews("entertainment");
  res.render("index", {
    articles,
  });
});

router.get("/science", async (req, res) => {
  const articles = await getNews("science");
  res.render("index", {
    articles,
  });
});

router.get("/health", async (req, res) => {
  const articles = await getNews("health");
  res.render("index", {
    articles,
  });
});

module.exports = router;

const express = require("express");
const newsRouter = require("./routes/news");
const viewRouter = require("./routes/view-render");

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "pug");

app.use("/", viewRouter);
app.use("/news", newsRouter);

app.listen(port, () => `Running on http://localhost:${port}`);

const express = require("express");
const mongoose = require("mongoose");
const linkRouter = require("./router/links");

const app = express();

mongoose.connect("mongodb://localhost/urlshortener", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(express.static(__dirname + "/Public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/links", linkRouter);

app.get("/", (req, res) => {
  res.render("index");
});

const port = "5000";
app.listen(port, () => {
  console.log("listening on port " + port);
});

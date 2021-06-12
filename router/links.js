const express = require("express");
const router = express.Router();
const Link = require("../models/link");

router.get("/:id", async (req, res) => {
  const link = await Link.findById(req.params.id);
  res.redirect(link.link);
});

router.get("/show/:id", async (req, res) => {
  const link = await Link.findById(req.params.id);
  res.render("link", { link: link, url: "localhost:5000" });
});

router.post("/", async (req, res) => {
  const link = new Link({
    link: req.body.link,
  });
  try {
    if (link.link.startsWith("https://")) {
      await link.save();
      res.redirect(`/links/show/${link.id}`);
    } else {
      res.redirect("/");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

var express = require("express");
var router = express.Router();

//messages to show
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "The Odin Message Board", messages: messages });
});

/* GET new message page */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New message" });
});

module.exports = router;

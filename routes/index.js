var express = require("express");
var router = express.Router();
var datefns = require("date-fns");

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
  // We use date-fns formatDistanceToNow function to show the added field in index view
  const formatDistanceToNow = datefns.formatDistanceToNow;
  res.render("index", {
    title: "The Odin Message Board",
    messages: messages,
    formatDistanceToNow: formatDistanceToNow,
  });
});

/* GET new message page */
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New message" });
});

/* POST new message page */
router.post("/new", function (req, res, next) {
  const { text, user } = req.body;
  if (!text || !user) {
    return res.render("form", { title: "Please add some text and user!" });
  }
  messages.push({
    text: text,
    user: user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;

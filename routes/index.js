var express = require("express");
var router = express.Router();
var datefns = require("date-fns");

//messages to show
const messages = [
  {
    text: `Hello Odin learners! Please try my <a href='https://alexerdei73.github.io/fakebook'>Fakebook</a> website.
    Bonus point if you know how the link added to the text field ;) You can try to find an answer by experimenting
    with adding new messages. By the way don't follow my code in your real app, as it's bad security practice!`,
    user: "Alex73",
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

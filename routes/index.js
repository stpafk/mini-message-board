var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hello",
    user: "Jane Doe",
    added: new Date(),
  },
  {
    text: "Hello",
    user: "Erick Bambino",
    added: new Date(),
  }
]
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;

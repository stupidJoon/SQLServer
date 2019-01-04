const express = require('express');
const sql = require('../sql.js');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.select("user", (result) => {
    res.send(result);
  });
});

module.exports = router;

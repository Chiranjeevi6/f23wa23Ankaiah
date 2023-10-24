var express = require('express');
var router = express.Router();
var x = Math.random();
var y = Math.random();

/* GET home page. */
router.get('/', function(req, res, next) {
    var result1 = Math.expm1(x);
    var result2 = Math.atan(x,y);
    var result3 = Math.exp(x);
    res.send(`[expm1] applied to [${x}] is: ${result1}  <br>[atan] applied to [${x},${y}] is ${result2} <br>[exp] applied to [${x}] is ${result3}`);
});

module.exports = router;

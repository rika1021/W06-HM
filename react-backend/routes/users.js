var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
        id: 1,
        username: "吳宜真"
    },{
        id: 1,
        username: "吳子搴"
    }, {
        id: 2,
        username: "黃義豐"
    }]);
    // res.send('respond with a resource');
});

module.exports = router;
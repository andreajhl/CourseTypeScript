"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 3000;
// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});
app.listen(port, function () {
    console.log("".concat(port));
});

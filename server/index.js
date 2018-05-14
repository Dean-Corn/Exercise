const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const servername = "localhost";
const port = 9080;

const exercise = require('./exercise/controller');


app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();
    })
    .use('/', express.static(path.join(__dirname,"../dist/") ) )
    .use('/exercise', exercise)
    .use('/', (req, res, next) => {
        res.sendFile(path.join(__dirname,"../dist/index.html"));
    })
    .listen(port);


console.log("running on http://" + servername + ":" + port)
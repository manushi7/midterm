const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const fs = require('fs');

router.get('/',function (request,response) {
    let index = fs.readFileSync('./views/index.html');
    response.write(index);
});

module.exports = router;
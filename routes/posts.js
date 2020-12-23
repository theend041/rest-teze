const express = require('express');
const routerPost = express.Router();

routerPost.get('/', (req, res) => {
    res.send('posts')
});


module.exports = routerPost;
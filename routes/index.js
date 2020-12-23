const express = require('express');
const router = express.Router();

const postRouter = require('./posts');
const loginRouter = require('./login');


//Router Midleware
router.use('/posts', postRouter);
router.use('/login', loginRouter);

router.get('/', (req, res) => {
    res.status(200).send('api');
});


module.exports = router;
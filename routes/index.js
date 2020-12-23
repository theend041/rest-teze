const express = require('express');
const router = express.Router();

const postRouter = require('./posts');
const loginRouter = require('./login');
const regRouter = require('./register');


//Router Midleware
router.use('/posts', postRouter);
router.use('/login', loginRouter);
router.use('/reg', regRouter);

router.get('/', (req, res) => {
    res.render('index.ejs')
});


module.exports = router;
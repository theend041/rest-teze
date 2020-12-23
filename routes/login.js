const express = require('express');
const routerLogin = express.Router();

//Get Page
routerLogin.get('/', (req, res) => {
    res.render('login.ejs')
})

//Post Data
routerLogin.post('/', (req, res) => {})


module.exports = routerLogin;
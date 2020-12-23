const express = require('express')
const routerReg = express.Router()
const bcrypt = require('bcrypt')

const users = []

//Get Page
routerReg.get('/', (req, res) => {
    res.render('register.ejs')
})

//Post Data
routerReg.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id : Date.now().toString(),
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword
        })
        res.redirect('/api/login')
    } catch (error) {
        res.redirect('/api/register')
    }
    console.log(users)
})


module.exports = routerReg;
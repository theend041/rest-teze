const express = require('express')
const app = express()
const appRouter = require('./routes/index')

//App Midleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Router Midleware
app.use('/api', appRouter)

//App Sets
app.set('view-engine', 'ejs')




//App burdan dinlenilir...
const port = process.env.PORT || 3000
app.listen(port, () => {console.log(`Server acilir... ${port}`)})
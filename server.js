const express = require('express');
const app = express();
const appRouter = require('./routes/index')


//App Midleware
app.use(express.json());

//Router Midleware
app.use('/api', appRouter);




//App burdan dinlenilir...
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server acilir... ${port}`)});
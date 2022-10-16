const express = require('express')
const app = express()
const port = 3000

//MiddleWare
app.set('view engine', 'ejs')
app.listen(3000, () =>{
    console.log(`I'm listening to port ${port}`)
})
 
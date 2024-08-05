require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000;


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/twitter',function(req,res){
    res.send('hello twitter')
})

app.listen(process.env.PORT, () =>{
    console.log(`the port is running on ${port}`)
})
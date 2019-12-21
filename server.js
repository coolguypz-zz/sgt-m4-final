const express = require('express')
const port = process.env.PORT || 9000
const routes = require('./routes')

const app = express();

app.use(express.urlencoded({extends:false}));

app.use(express.json())

app.use(routes)

app.listen(port,()=>{
  console.log("Server listening at localhost: " + port)
})


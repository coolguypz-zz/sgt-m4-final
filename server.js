const express = require('express')
const port = process.env.PORT || 9000

const app = express();

app.use(express.json())

app.get('/api/test',(req,res)=>{
  res.send({
    message:"Test route '/api/test' working"
  })
})

app.listen(port,()=>{
  console.log("Server listening at localhost: " + port)
})
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 4000

const emailListPath = path.join(__dirname,'/public','emailList.json')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/email',(req,res) => {
  fs.readFile(emailListPath,'utf8',(err,data) => {
    data = JSON.parse(data)
    data.push(req.body)
    const temp = JSON.stringify(data)
    fs.writeFile(emailListPath,temp,(err) =>{
      if(err){
        res.status(500).send('Error')
      }
      res.status(201).send()
    })
  })
})

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
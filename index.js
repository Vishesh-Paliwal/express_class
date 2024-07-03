const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let courses = [
    {id:1 , name: "java"},
    {id:2 , name:"javascript"},
    {id:3 , name:"python"}
]

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/course', (req, res) => {
    res.json(courses);
  })
  
app.post('/course',(req,res)=>{
    console.log(req.body);
    let singCor = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(singCor);
    res.send("updated");
})
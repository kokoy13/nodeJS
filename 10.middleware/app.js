const express = require('express');
const app = express()
const port = 3000

app.set('view engine', 'ejs')

//Built-in Middleware
app.use(express.static('public'))

//App Level Middleware
app.use((req,res,next) =>{
    console.log(Date.now());  
    next()
})

app.get('/', (req,res) =>{
    res.render('index')
})

app.get('/about', (req,res) =>{
    res.render('about')
})

app.listen(port, ()=>{
    console.log(`app listening at http://127.0.0.1:${port}`)
})
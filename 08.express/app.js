const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname})
})

app.get('/detail', (req, res) =>{
    res.json({
        name: 'Andika'
    })
})

app.get('/file', (req, res) => {
    res.sendFile('./home.html', {root: __dirname})
})

app.get('/product/:id/category/:cat_id', (req, res) => {
    res.send(`Product ID: ${req.params.id}. Category ID: ${req.params.cat_id}`)
})

app.use('/', (req, res) =>{
    res.status(404)
    res.send("Error 404: Page Not Found")
})

app.listen(port, ()=>{
    console.log(`app listening at http://127.0.0.1:${port}`);
})
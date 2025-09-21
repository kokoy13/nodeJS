const express = require('express');
const app = express()
const port = 3000

//Gunakan ejs
app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
    const nama = 'Andika Firansyah'
    const title = "Halaman Home"
    res.render('index', {nama, title})
})

app.get('/mahasiswa', (req,res) =>{
    const title = "Daftar nama mahasiswa"
    const mahasiswa = [
        {
            nama: "Andika Firansyah",
            email: "andikafiransyah1905@gmail.com"
        },
        {
            nama: "Afri Ramadhan Kamil",
            email: "afriramadhan1905@gmail.com"
        },
        {
            nama: "Rayhan Luqmana",
            email: "rayhanluqmana1905@gmail.com"
        }
    ]

    res.render('mahasiswa', {mahasiswa, title})
})


app.listen(port, () => {
    console.log(`app listening at http://127.0.0.1:${port}`);
})
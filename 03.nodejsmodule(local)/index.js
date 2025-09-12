const fs = require('fs') //core module
const app = require('./app') //local module
// const moment = require('moment') //third party module

app.cetakNama('Andika')
console.log(`Umur saya ${app.umur} Tahun`);

console.log(app.dosen.getDosen());
app.setText('Andika')
new app.Person()


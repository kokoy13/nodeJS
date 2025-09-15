//Import Core Module yang ada pada node
const fs = require('fs')
const readline = require('readline')

//Inisiasi Interface input dan output module core readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

//Checking folder dan file untuk data contact
if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
    if(!fs.existsSync('./data/contacts.json'))
        fs.writeFileSync('./data/contacts.json','[]','utf-8')
}

//Fungsi untuk mengembalikan pertanyaan dengan jawaban sesuai input jawabannya
const question = (ask) => {
    return new Promise((resolve, reject) => {
        rl.question(ask, (data) =>{
            resolve(data)
        })
    })
}

//Fungsi menyimpan contact sesuai dengan hasil inputan dari fungsi question
const saveContact = (nama, telp, email) => {
    //Inisiasi object
    const data = {nama, telp, email}

    //Membaca file secara synchronus pada data json(dalam bentuk string)
    const file = fs.readFileSync('./data/contacts.json', 'utf-8')    
    //Melakukan parsing file kedalam bentuk object json
    const datas = JSON.parse(file)

    //Push hasil inputan sesuai dengan data yang telah diinputkan ke file json
    datas.push(data)

    //Menuliskan hasil push kedalam file json
    fs.writeFileSync('./data/contacts.json', JSON.stringify(datas, null, 2))

    rl.close()
}

//export module
module.exports = {question, saveContact}
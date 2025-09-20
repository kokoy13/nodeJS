//Import Core Module yang ada pada node
const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator');
// const readline = require('readline')

//Inisiasi Interface input dan output module core readline
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// })

//Checking folder dan file untuk data contact
if(!fs.existsSync('./data')){
    fs.mkdirSync('./data')
    if(!fs.existsSync('./data/contacts.json'))
        fs.writeFileSync('./data/contacts.json','[]','utf-8')
}

//Fungsi untuk mengembalikan pertanyaan dengan jawaban sesuai input jawabannya
// const question = (ask) => {
//     return new Promise((resolve, reject) => {
//         rl.question(ask, (data) =>{
//             resolve(data)
//         })
//     })
// }

//Fungsi menyimpan contact sesuai dengan hasil inputan dari fungsi question
const saveContact = (nama, telp, email) => {
    //Inisiasi object
    const data = {nama, telp, email}
    
    const datas = getJSONData('./data/contacts.json')
    
    //Validasi data nama
    const duplicateName = datas.find((contact) => contact.nama === nama)
    if(duplicateName){
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain'));
        return false
    }
    
    //validasi data telp
    const checkNoTelpIsValid = datas.find((contact) => contact.telp === telp)
    if(checkNoTelpIsValid || !validator.isMobilePhone(telp, 'id-ID')){
        console.log(chalk.red.inverse.bold('No Telp tidak valid. silahkan gunakan no telp indonesia'));
        return false
    }

    //Validasi data email
    const checkDuplicateEmail = datas.find((contact) => contact.email === email)
    if(checkDuplicateEmail || !validator.isEmail(email)){
        console.log(chalk.red.inverse.bold('Email tidak valid atau sudah digunakan'));
        return false
    }
    
    //Push hasil inputan sesuai dengan data yang telah diinputkan ke file json
    datas.push(data)

    //Menuliskan hasil push kedalam file json
    fs.writeFileSync('./data/contacts.json', JSON.stringify(datas, null, 2))

    console.log('Data berhasil dimasukan');
}

const listContact = () =>{
    const datas = getJSONData('./data/contacts.json')

    datas.forEach((data, i) =>{
        console.log(`${i+1}. ${data.nama}, ${data.email}`);
        
    })
    
}

const getDetailsByName = (nama) =>{
    const datas = getJSONData('./data/contacts.json')
    
    //Menggunakan Looping
    // var count = 0
    // datas.forEach((data, i) =>{
    //     if(nama.toLowerCase() === data.nama.toLowerCase()){
    //         console.log(`${i+1}. ${data.nama}, ${data.email}`);
    //         count++
    //     }  
    // })
    // if(count == 0)
    //     console.log(chalk.red.inverse.bold(`Data dengan nama ${nama} tidak ditemukan`));  

    //Menggunakan find
    const contact = datas.find((contact) => 
        contact.nama.toLowerCase() === nama.toLowerCase()
    )
    
    if(!contact){
        console.log(chalk.red.inverse.bold(`Data dengan nama ${nama} tidak ditemukan`));  
        return false
    }
    console.log(`${contact.nama}, ${contact.email}`);
}

const removeDataByName = (nama) =>{
    const datas = getJSONData('./data/contacts.json')

    const remove = datas.filter(item => 
        item.nama.toLowerCase() !== nama.toLowerCase()
    )
    
    if(remove.length == datas.length){
        console.log(chalk.red.inverse.bold(`Data dengan nama ${nama} tidak ditemukan`));  
        return false
    }
    
    fs.writeFileSync('./data/contacts.json', JSON.stringify(remove,null,2))

    console.log(`Berhasil menghapus data dengan nama ${nama}`);
}

const getJSONData = (path) =>{
    //Membaca file secara synchronus pada data json(dalam bentuk string)
    const file = fs.readFileSync(path, 'utf-8')    
    //Melakukan parsing file kedalam bentuk object json
    const datas = JSON.parse(file)

    return datas
}

//export module
module.exports = {
    // question, 
    saveContact,
    listContact,
    getDetailsByName,
    removeDataByName
}
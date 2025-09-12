const fs = require('fs')
const readline = require('readline')

//Write file Synchornus
// try{
//     fs.writeFileSync('data/testing.docx', 'Ini testing filesystem menggunakan module fs(core)')
// }catch(e){
//     console.log(e);
// }

//Write file Asynchronus
// fs.writeFile('data/testing.txt', 'Ini text yang dikirim menggunakan fungsi asynchronus', (err) => {
//     console.log(err);
// })

//Read file Synchronus
// const read = fs.readFileSync('testing.docx', 'utf-8')
// console.log(read);

//Read file Asynchronus
// const readAsyn = fs.readFile('data/testing.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data);
// })

//Readline
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Siapa nama kamu : ', (nama) => {
//     rl.question('Berapa usia anda : ', (usia) => {
//         console.log(`Nama anda ${nama} dengan usia ${usia} tahun`);
//         rl.close()
//     })
// })

//Challange ubah data input dengan luaran json
//Readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Siapa nama kamu : ', (nama) => {
    rl.question('Berapa usia kamu (tahun) : ', (usia) => {
        const data = {nama, usia}
        
        const file = fs.readFileSync('data.json', 'utf-8')
        const datas = JSON.parse(file)

        datas.push(data);

        fs.writeFileSync('data.json', JSON.stringify(datas, null, 2))

        rl.close()
    })
})

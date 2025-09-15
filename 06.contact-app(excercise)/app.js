//import module pada file contact
const {saveContact, question} = require('./contact')

//Fungsi main
const main = async () => {
    //Pemanggilan fungsi quoestion sesuai dengan parameter ask sebagai pertanyaan
    const nama = await question('Masukan nama : ')
    const telp = await question('Masukan no.telp : ')
    const email = await question('Masukan email : ')

    //pemanggilan fungsi saveContact untuk menyimpan contact sesuai dengan variable - variable diatas
    saveContact(nama, email, telp)
}

//pemanggilan fungsi main agar bisa berjalan
main()
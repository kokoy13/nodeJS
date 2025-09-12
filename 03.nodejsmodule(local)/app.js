const cetakNama = (nama) => {
    console.log(`Nama saya adalah ${nama}`);
}

const umur = 21

const dosen = {
    nama:'Aldo Erianda',
    jurusan:'Teknologi Informasi',
    getDosen(){
        return `Dosen dengan nama ${this.nama} mengajar di jurusan ${this.jurusan}`
    }
}

const setText = (mahasiswa) => {
    console.log(`Bapak ${dosen.nama} mengajar ${mahasiswa} dengan jurusan ${dosen.jurusan} pada saat ${mahasiswa} berumur ${umur} Tahun`);
}

class Person{
    constructor(){
        console.log('Orang has created');
        
    }
}

//Cara Jadul
// module.exports.cetakNama = cetakNama
// module.exports.umur = umur
// module.exports.dosen = dosen
// module.exports.setText = setText
// module.exports.Person = Person

//Cara populer
// module.exports = {
//     cetakNama : cetakNama,
//     umur : umur,
//     dosen : dosen,
//     setText : setText,
//     Person : Person
// }

//Direkomendasikan
module.exports = {cetakNama, umur, dosen, setText, Person}
const yargs = require('yargs')
const contacts = require('./contact')

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        notelp: {
            describe: 'No Telp',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv){
        const contact = {
            nama: argv.nama,
            notelp: argv.notelp,
            email: argv.email
        }
        contacts.saveContact(contact.nama, contact.notelp, contact.email)
    }
}).demandCommand()

//Menampilkan semua contact pada JSON
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP Contact',
    handler(){
        contacts.listContact()
    }
})

//Menampilkan detail sebuah atau beberapa contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah atau beberapa contact',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        const contact = {
            nama: argv.nama
        }

        contacts.getDetailsByName(contact.nama)
    }
})

//Menghapus data JSON berdasarkan nama
yargs.command({
    command: 'remove',
    describe: 'Menghapus data JSON berdasarkan nama',
    builder: {
        nama: {
            describe: 'Menghapus data',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        const contact = {
            nama: argv.nama
        }

        contacts.removeDataByName(contact.nama)
    }
})

yargs.parse()
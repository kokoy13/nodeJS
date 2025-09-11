//Synchronous

const getUserSync = (id) => {
    const nama = id == 1 ? 'Andika':'Firansyah'

    return {id, nama}
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2)
console.log(userDua)

const halo = 'Hello World!'
console.log(halo)


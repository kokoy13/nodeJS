const validator = require('validator')
const chalk = require('chalk')

const checkIsEmail = validator.isEmail('andikafiransyah1905@gmail.co') ? 'valid':'tidak valid'
const checkIsPhoneNumber = validator.isMobilePhone('08211260349806', 'id-ID') ? 'Indonesia':'Luar negeri';
console.log(chalk.blue(`Email anda : ${checkIsEmail}, dan no telp anda berformat ${checkIsPhoneNumber}`));

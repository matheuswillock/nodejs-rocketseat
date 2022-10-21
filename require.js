// adicionando os módulos nativos do node
const path = require('path')

console.log(path.basename(__filename))

// importando os meus próprios módulos
const myModule = require('./exports.js')
console.log(myModule)
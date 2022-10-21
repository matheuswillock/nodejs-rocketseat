// lista de argumentos
// console.log(process.argv)

// const firstName = process.argv[2]
// const lastName = process.argv[3]

// console.log(`Whats your name? \nI am ${firstName} ${lastName}.`)

// pegando o campo user do process
// const username = process.env.USER

// pegando o username passado no argv
const username = process.argv[3]
console.log(username)

// username == 'mwillock' ? console.log(`${username} you are authorized!`) : console.log(`No authorized!`)

// passando flags como argumento
// criando variáveis dentro de argv
// --username "mwillock" --greeting "tudo bem com você?"
const greeting = process.argv[5]

console.log(`Olá ${username} ${greeting}`)
console.log(process.argv)


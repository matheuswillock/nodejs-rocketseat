/** Crie 2 arquivos JS
 * O primeiro, irá exportar uma function chamada getFlag()
 * que  receberá um argumento do tipo String.
 * Essa function deverá buscar dentro da array process.argv a flag desejada, 
 * que é a string e retornar o valor da flag.
 * 
 * O segundo irá importar a function e passar a flag desejada.
 * 
 * Iremos rodar no terminal o segundo arquivo passando as flags 
 * --name e --greeting para que seja impresso no terminal
 * a saudação e o nome da pessoa.
 * --name "Matheus Willock" --greeting "tudo bem com você?"
 */

const getFlag = require('./getFlag')

const nameFlag = getFlag('--name')

const greetingFlag = getFlag('--greeting')

console.log(`Olá ${nameFlag}, ${greetingFlag}`)
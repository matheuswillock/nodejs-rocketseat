// O módulo de events já faz parte do core do Nodejs
const { EventEmitter } = require('events')

// Consultar o que existe dentro do módulo de events do nodeJS
// console.log(EventEmitter)

const eventEmitter = new EventEmitter()
// console.log(eventEmitter)

// Ouvindo os eventos
// o on vai ouvir sempre que for chamado
// já o on, vai ouvir uma única vez
eventEmitter.on('saySomething', (message) => console.log('Eu ouvi você', message))

// const message = 'Maik';

// Disparar o evento
eventEmitter.emit('saySomething', 'Maik')
eventEmitter.emit('saySomething', 'João')
eventEmitter.emit('saySomething', 'Tobirama')



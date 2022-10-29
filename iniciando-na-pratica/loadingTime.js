// Algoritmo de Carregamento 

module.exports = function start(message) {
  console.log("Starting ")

  let loading = ''
  let count = 3

  const myTimeout = setInterval(() => {
    for (var i = 0; i < 1; i++) {
      count > loading.length ? console.log(loading += '.') : zeroTime(myTimeout, message)
    }

  }, 800)

}

function zeroTime(timeout, message) {
  clearTimeout(timeout)

  setTimeout(() => {
    console.log(`\n${message}`)
  }, 50)

}


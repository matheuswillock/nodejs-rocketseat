// Algoritmo de Carregamento 

start()

function start() {
  console.log("Starting ")

  let loading = ''
  let count = 3

  const myTimeout = setInterval(() => {
    for (var i = 0; i < 1; i++) {
      count > loading.length ? console.log(loading += '.') : zeroTime(myTimeout)
    }

  }, 800)

}

function zeroTime(timeout) {
  clearTimeout(timeout)

  setTimeout(() => {
    console.log('\nHello World!')
  }, 1000)

}


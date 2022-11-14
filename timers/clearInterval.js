// O clearInterval vai cancelar um setInterval registrado
const timeOut = 1000
let count = 3

const checking = () => {
  let response = count == 0 ? 'check completed!' : 'checking...'

  count == 0 ? clearInterval(time) : count--

  console.log(response)
}

// A cada 1000 milissegundos o set interval roda um lógica
let time = setInterval(checking, timeOut)


// setInterval irá rodar uma função N vezes
// Depois de X milissegundos
const timeOut = 1000
let count = 0
const checking = () => {
  let response = 'checking!'

  if (count >= 5) {
    response = 'check completed'
    clearTimeout(time)
  }

  count++
  console.log(response)
}
// A cada 1000 milissegundos o set interval roda um lógica
let time = setInterval(checking, timeOut)





// setTimeout rodar uma função depois de x milissegundos
const timeOut = 3000
const finished = () => {
  console.log('Done!')
}

setTimeout(finished, timeOut);
// vai rodar primeiro esa função para para quando finalizar os 3000 
//milissegundos mostrar o Done! em tela. Ou seja Assincronismo
console.log('mostrar')
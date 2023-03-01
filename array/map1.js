const nuns = [ 1, 2, 3, 4, 5, 6]
//.map gera um novo array
//.map é um método onde transforma cada elemento do array em outro array do mesmo tamanho 

//a função que de callback que o método recebe pode ter 3 parâmetros (elemento, índice, array) 
let novoArray = nuns.map(function(valor) {
    return 2 * valor
})
console.log(novoArray)

//funções armazenadas em uma variável que podem ser funções de callback
const soma10 = item => item + 10 
const triplo = elemento => elemento * 3

//parseFloat(elemento) analisa um argumento (convertendo-o para uma string primeiro caso necessário) e retorna um número de ponto flutuante (número decimal).

//.toFixed(2) para tem 2 casas decimais 
//.replace('.', ',') para trocar o ponto pela virgula 
const paraDinhero = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

//para passar uma função de callback no método .map
novoArray = nuns.map(soma10).map(triplo).map(paraDinhero)
console.log(novoArray)

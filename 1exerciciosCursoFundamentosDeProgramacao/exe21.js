/* crie uma função que receba um array de números e retorne o menor número do array */

function retornaMenorNumero (arrayNumeros) {
    return Math.min(...arrayNumeros)
       
}
function retorneMaiorNumero (arrayNumeros) {
    return Math.max(...arrayNumeros)
}   



console.log(retornaMenorNumero([1,2,3,4,-5]))
console.log(retorneMaiorNumero([1,2,3,4,-5]))
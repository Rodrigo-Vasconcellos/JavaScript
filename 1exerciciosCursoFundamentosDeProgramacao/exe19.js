/* crie uma função que receba um array de números retorne a média destes números  */

const soma = function (acumulador, elemento) {
    return acumulador + elemento
}

function media (arrayNumeros) {
    return arrayNumeros.reduce(soma) / arrayNumeros.length
}
console.log(media([1,2,3,4,5]))
console.log(media([1,1,1,1]))
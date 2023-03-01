/* Escreva uma função que recebe um array de números e retorná a soma de todos os números desse array */

function somaDoArray (array) {
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    return soma
}
console.log(somaDoArray([2,2,2,2]))

const somaArray = (array) => {
    let soma = 0
    array.forEach(array => soma += array)
    return soma
}
console.log(somaArray([2,2,2,2]))

function somaArray2 (arrayNumero) {
    const soma = arrayNumero.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0 )
    return soma
}
console.log(somaArray2([2,2,2,4]))
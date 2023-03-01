/*  Crie uma função que recebe dois números e retorne se o primeiro é maior ou igual ao segundo  */

function primeiroValorMaiorOuIgual (a, b) {
    if(typeof a != typeof b) return false
    return a >= b
}
console.log(primeiroValorMaiorOuIgual(0, 5))
console.log(primeiroValorMaiorOuIgual(0, 0))
console.log(primeiroValorMaiorOuIgual(5, 1))
console.log(primeiroValorMaiorOuIgual(2, '1'))


const primeiroValorMaiorOuIgual1 = (a, b) => {
    if(typeof a != typeof b) return false
    a >= b
}
console.log(primeiroValorMaiorOuIgual1(2, "5"))
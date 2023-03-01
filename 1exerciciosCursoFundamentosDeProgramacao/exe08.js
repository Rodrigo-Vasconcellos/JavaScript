/* desenvolva  uma função que recebe dois némeros inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. porém, não utilize o operador de mutiplicação  */

function multiplicar(a, b) {
    let resultado = 0
    for(let i = 0; i < b; i++)
        resultado += a

    return resultado    
}

console.log(multiplicar(5, 5))

//nâo entendo essa logica
function multiplicar2(a, b) {
    if (a === 0 || b === 0) return 0

    return a === 1 ? b : b + multiplicar2(b, a-1)
}    
console.log(multiplicar2(-1, 5))
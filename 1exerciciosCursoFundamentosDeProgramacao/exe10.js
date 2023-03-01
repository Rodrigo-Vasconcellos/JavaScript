/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especifica no parâmetros */
function imprimir(valor) {
    let resultado = ''
    for (let i = 0; i < valor; i++) 
        resultado += '+'
    return resultado
}

console.log(imprimir(5))

const simboloMais = (quantidade) => Array(quantidade).fill('+').join('')
console.log(simboloMais(3))

const simbolo = (quantidade) => '+'.repeat(quantidade)
console.log(simbolo(10))
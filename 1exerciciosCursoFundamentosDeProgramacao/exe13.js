/* crie uma função que receba um arrey de elementos e retorne um arrey somente com números presentes no arrey recebido como parmetro */

const filtrarNumeros = (vetor) => vetor.filter(item => typeof item === 'number')
console.log(filtrarNumeros([1, 'ola', 'oi', 4, 5]))

function filtrarN (array) {
    const resultado = []
    for(let itens of array)
        if (typeof itens === 'number')
            resultado.push(itens)
    return resultado
}
console.log(filtrarN([1, 'ola', 'oi', 4, 5]))


const filtrarString = (array) => array.filter(Number)
console.log(filtrarString([1, 'ola', 'oi', 4, 5]))
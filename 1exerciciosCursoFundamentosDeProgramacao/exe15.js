/* Escreva uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenha indices pares. */

function retorneOsParesComIndicePar (array){
    const resposta = []
    for (let i = 0; i < array.length; i += 2) {
        const numeroPar = array[i] % 2 == 0

        if(numeroPar) 
            resposta.push(array[i])  

    } 
    return resposta
}
console.log(retorneOsParesComIndicePar([2,3,4,5,7]))

function retorneOsParesComIndicePar1 (array) {
    return array.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
}
console.log(retorneOsParesComIndicePar1([2,3,6,5,7]))
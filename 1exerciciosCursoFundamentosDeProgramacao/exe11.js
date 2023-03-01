/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array */


function primeiroUltimo (vetor) {
    const inicio = vetor[0]
    const fim = vetor.pop()
    const resposta = [inicio, fim]
    return resposta
}
   
console.log(primeiroUltimo([1,2,3,4,5,' ola']))

const novoVetor = (elementos) => {
    const fim = elementos.pop()
    return [elementos[0] , fim] 
}
console.log(novoVetor([1,2,3,4,5,3]))

function teste (array) {
    const inicio = array.shift()
    const fim = array.pop()
    return [inicio, fim]
}
console.log(teste([1,2,3,4,5,6,7,8,9]))
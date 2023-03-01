

const soma = function (array) {
    return  array.reduce(function (acumulador, elemento) {
        return acumulador + elemento
    })
}

const media = function (array) {
    return soma(array) / array.length
}

function ReceberMelhorEstudadnte (objDeEstudantees) {
    const estudantesComMedia = Object.entries(objDeEstudantees).map(function(elemento) {
        const chave = 0,
        valor = 1
        return {nome: elemento[chave], media: media(elemento[valor])}
    })
     
    const estudanteOrdenados = estudantesComMedia.sort( function(estudanteA, estudanteB) {
        return estudanteB.media - estudanteA.media
    })
    const melhorEstudante = estudanteOrdenados[0]
    
    return melhorEstudante 
}


console.log(ReceberMelhorEstudadnte({
    joao: [8, 7.6, 8.9, 6],
    mariana: [9, 6.6, 7.9, 8],
    carla: [7, 7, 8, 9]
}))
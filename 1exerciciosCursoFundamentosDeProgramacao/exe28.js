/**Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que tem a quantidade de dígitos indicado pelo segundo parâmetro.  */




function filtrarPorQuantidadeDeDigitos (array, quantidadeDesejada) {
    const resposta = array.filter(function(elemento) {
        const quantidadeDeDigitos = String(elemento).length
        return quantidadeDesejada === quantidadeDeDigitos
    })
    return resposta
}

console.log(filtrarPorQuantidadeDeDigitos([1,2,11,22,33,8,159], 2))
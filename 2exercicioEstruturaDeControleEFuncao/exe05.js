function conserto () {
     const resposta = 0.1 + 0.2
    return resposta.toFixed(2)
}

console.log(conserto())


function formatarValorDecimal (valor) {
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    return valorEmReais
}

console.log(formatarValorDecimal(0.1 + 0.2))
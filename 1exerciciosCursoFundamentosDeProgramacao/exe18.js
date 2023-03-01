/* crie uma função que receba um array de produtos e retorne o total das despesas */
const totalDespesas = (arrayDeObj) => arrayDeObj.reduce((acumulador, numeroAtual) => acumulador + numeroAtual.preco, 0 )

console.log(totalDespesas([{nome: "lapis", categotia: "escolar", preco: 2}, {nome: '"caderno', categoria: "adulto", preco: 5}]))

function despesastotais (arrayObj) {
    let total = 0
    for (let item of arrayObj)
    total += item.preco
    return total
}
console.log(despesastotais([{nome: "lapis", categotia: "escolar", preco: 2}, {nome: '"caderno', categoria: "adulto", preco: 5}]))

const soma = function(acumulador, elemento) {
    return acumulador + elemento
}
const arrayDePrecos = function(elemento) {
    return elemento.preco
}

function despesas(arrayDeObj) {
    return arrayDeObj.map(arrayDePrecos).reduce(soma)
}
console.log(despesas([{nome: "lapis", categotia: "escolar", preco: 2}, {nome: '"caderno', categoria: "adulto", preco: 5}]))


function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('caneta', 2))
console.log(criarProduto('lapis', 1))
console.log(criarProduto('borracha', 1.5))
console.log(criarProduto('caneta azul', 5))
console.log(criarProduto('caneta verde', 2.5))
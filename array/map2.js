// array em formato JSON
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

//retorne um array apenas com os preços 

// constante paraObj vai receber uma função que tem como parâmetro um json e vai retornar JSON.parse(json)
const paraObj = json => JSON.parse(json)
//constante apenasPreco recebe como parâmetro um produto e retorna 
const apenasPreco = obj=> obj.preco

let resposta = carrinho.map(paraObj).map(apenasPreco) 

console.log(resposta)



//para transformar um objeto em um arquivo de formato JSON gerando um novo arquivo de formato JSON
// primeiro colocar uma referência fs que é um modulo que já vem interno no node
const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 100.99,
    desconto: 0.15
}
// writFile = escrever arquivo
//__dirname = constante que representa diretório atual
//JSON.stringify(produto) = transformar para o formato JSON. restringir(variável)

// __dirname + o nome do arquivo que quero gerar , restringir o conteúdo que quero que passe no formato JSON, callback que quando o valor de erro for nulo ele vai imprimir arquivo salvo! 

fs.writeFile(__dirname + '/arquivoGerador.json', JSON.stringify(produto), erro => {
    console.log(erro || 'arquivo salvo!')
})
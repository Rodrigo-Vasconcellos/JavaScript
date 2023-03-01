// caminho relativo para importar um modulo no node é a melhor forma para importar modulos dentro de um projeto 
const moduloA = require('../../moduloA.js')
console.log(moduloA.ola)

const teste = require('../../moduloB')
console.log(teste.bomdia)

//note que as 2 formas a segir levam ao mesmo lugar, pois foi intalado usando o terminal o lodash que criou a pasta node_modules esta pasta tem um atalho que procura a pasta escolida dentro da pasta node_modules e retorna o arquivo index.js

//const saudacao = require('../../../node_modules/saudacao/index.js')
const saudacao = require('saudacao') 
console.log(saudacao.ola)

//caminho absoluto eu clico com o botão direito em cima do modulo que desejo e utilizo o Copy Path ou copiar caminho 
const modulo1 = require('/Users/Rodrigo/ADSfacudade/JavaScript/node/moduloA.js')
console.log(moduloA.ola)

const exe01 = require('/Users/Rodrigo/ADSfacudade/JavaScript/1exerciciosCursoFundamentosDeProgramacao/exe01.js')
console.log(exe01.retornar)


// exempo de como importar um modulo interno do node
const http = require('http')
http.createServer((requisicao, resresposta) => {
    resresposta.write('oi bom dia ???')
    resresposta.end()

}).listen(8080)
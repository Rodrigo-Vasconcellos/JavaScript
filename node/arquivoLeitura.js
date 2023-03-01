// primeiro colocar uma referência fs que é um modulo que já vem interno no node

const fs = require('fs')

//definindo uma variavel caminho, 
const caminho = __dirname + '/arquivo.json'

// leitura de forma síncrona  : não muito interessante pois pode travar o envio de requisições, pois tem que ler todo o arquivo para despachar as requisições 
// definindo uma constante que vai receber o conteúdo de fs.readFileSync() 
// fs.readFileSync() = leia arquivo de forma síncrona
//dentro dos parentes tem que ser passado como parâmetro o (caminho, o tipo de encode que eu quero que ele leia)

const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// Leitura de forma assíncrona: é uma leitura mais interessante 
//neste caso também passa como parâmetro (caminho, o tipo de encode a ser lido, e vou passar uma call-back
//Essa call-back vai ter os elementos (erro, conteudo)
//note que conteudo é um texto então é preciso transformar para um objeto para poder ser manipulado 
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.bd.host}:${config.bd.port}`)
})
//Também é possível fazer assim, note que isto vai ser executado antes do console.log anterior pois é executado de forma síncrona carrega o objeto,  o anterior foi assíncrona então ela dispara uma call-back e quando o arquivo tiver terminado ele é disparado de volta  
const config = require('./arquivo.json')
console.log(config.bd)


// fs.readdir() = leia um diretório
//__dirname  é uma constante que representa o diretório atual 
fs.readdir(__dirname, (erro, arquivos) => {
    console.log('conteúdo da pasta...')
    console.log(arquivos)
})
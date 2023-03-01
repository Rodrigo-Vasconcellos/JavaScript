// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']  //foi deletado um atributo

console.log(produto)

const carro ={
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'rua 123',
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 20
    }],
    calcularValorSeguro: function() {
        //...
    }
}

console.log(carro)


carro.modelo = 'fusca'
carro.valor = 5000
carro.proprietario.endereco.logradouro = 'rua visconde'
carro.proprietario.endereco.numero = 84
console.log(carro)

delete carro.proprietario.numero
//delete carro.condutores

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)   //length indica o tamanho do objeto condutores


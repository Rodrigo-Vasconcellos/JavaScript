// Objetc.preventExtensions  não vai permitir adicionar novos atributos no seu objeto mas permite mudar os dados ou deletar atributos
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})
//objetc.isExtensible  esta função testa se o objeto foi criada com .preventExtensions ou não 
console.log('extensível:', Object.isExtensible(produto))

//note que não foi permitido adicinar o atributo .descricao
produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal    não consegue adicionar ou excluir novos atributos neste objeto

const pessoa = { nome: 'rau', idade: 35}
Object.seal(pessoa)
console.log('selaco:', Object.isSealed(pessoa))
delete pessoa.nome
pessoa.peso = 55
pessoa.idade = 23



// note que nao foi possível apagado, nem adicionado atributos mas permite manipular os dados 
console.log(pessoa)

// objetc.freeze = selado + valores constantes
// nao consegue mudar nada no objeto, ele é constante
const pai = { nome: 'pedro', corCabelo: 'preto'}

// para criar um novo objeto utilizando o metodo Object.create(), utiliza como primeiro parâmetro um protótipo (objeto)  
//assim em vez de criar um objeto apontando para o Objetc.prototype, ele é criado apontando para o objeto (protótipo) escolhido  
const filha1 = Object.create(pai)
//com isso eu posso adicionar atributos para filha1
filha1.nome = 'ana'

//e posso chamar a atributos do pai no objeto filha1
console.log(filha1.corCabelo)

// neste caso foi criado um objeto que aponta para um protótipo, e é possível criar outros atributos, neste caso foi criado um objeto com o atributo nome e foi definido algumas propriedades para esse atributo como enumerable para anumerar, writable para não deixar mudar o valor do atributo, value para indicar o valor do atributo
const filha2 = Object.create(pai, {
    nome: {value: 'bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
// mudar o atributo nome 
filha2.nome = 'carla'
//nao foi mudado o atributo nome pois writable não permite essa mudança 
console.log(filha2.nome)

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//para mostrar os atributos de um objeto utiliza o método keys(), se o enumerable for false vai mostrar o atributo vazio 
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//essa é a forma de saber quando um atributo é do objeto ou é passado por herança utilizando o método hasOwnProperty()   
//se hasOwnProperty === true vai retornar os atributos do próprio objeto se não vai retornar atributos da herança
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key} `)
}
// usando a notação literal
const obj1 = {}
console.log(obj1)

//objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
       return preco * (1 - desc) 
    }
} 

const p1 = new produto('caneta', 8, 0.10)
const p2 = new produto('notbook', 2000, 0.1)

console.log(p1)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

console.log(p2.getPrecoComDesconto())

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario ('rodrigo', 1000, 10)
const f2 = criarFuncionario ('ana', 2000, 1)

console.log(f1.nome ,f1.getSalario(), f2, f2.getSalario())


// object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


// um função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)


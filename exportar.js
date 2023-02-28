//repara que module.exports é um bjs vasio 
console.log(module.exports)
console.log(module.exports === this)
console.log(exports === this)

//formas de adicnar pares de chave e valor dentro do objeto module.exports
this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)


//repare que nao foi anulado 
exports = null
console.log(module.exports)

// note que nao foi modificado o objeto
exports = {
    nome: 'teste'
}
console.log(module.exports)
//this e exports são somente duas referencias para o mesmo objeto que module.exports aponta

// para mudar o objeto é necessario fazer desta forma
module.exports = {
    nome: 'rodrigo',
    id: 0005

}
console.log(module.exports)
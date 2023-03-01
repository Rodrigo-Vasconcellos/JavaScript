// pessoa -> endereço1 -> {...}
const pessoa = {nome: 'rodrigo'}    // aqui o endereço do objeto é constante
console.log(pessoa)

// pessoa -> endereço2 -> {...}     //Não é possível mudar o endereço de uma constante 

Object.freeze(pessoa) // O objeto está congelado, assim o endereço e os dados estão constantes 

pessoa.nome = 'maria' //nao foi atribuido maria para o atributo nome pois o objeto esta congelado 
pessoa.end = 'rua asd'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'joao'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)

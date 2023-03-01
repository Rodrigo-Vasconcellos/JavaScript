console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}


// this.split('')   vai gerar um array onde cada espaço(letra, espaço em branco, simbolos) vai ocupar um espaço dentro do array

//reverse()    vai reverter o array 

//join('')      vai juntar todos os elementos do array novamente em uma string agora revertida 

console.log('rodrigo 123'.reverse())

Array.prototype.PrimeiroElemento = function() {
    return this[0] 
}
Array.prototype.UltimoElemento = function() {
    return  this.pop()
}
console.log([1,2,3,4,5,6].PrimeiroElemento())

String.prototype.PrimeiraLetra = function () {
    return this.split('').PrimeiroElemento()
}
String.prototype.UltimoLetra = function () {
    return this.split('').UltimoElemento()
}
console.log('rodrigo'.PrimeiraLetra(),'rodrigo'.UltimoLetra())

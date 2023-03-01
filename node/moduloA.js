// formas de exportar augo de dentro de um módulo node para outro arquivo
//se usar a palavra this.variável dentro de um modulo node ela vai poder ser acessada dentro de outro arquivo 
this.ola = 'fala pessoal'
// outra forma de exportar é usando a palavra exports.variável
exports.bemVido = 'bem vindo pode entra '
// o modo mais clássico de se exportar alguma coisa é utilizando o module.exports.variável
module.exports.ateLogo = 'até logo pessoal'


//lembrando que this = {}
//exports = {}

// {} = uma coleção de chaves e valores dinâmicas

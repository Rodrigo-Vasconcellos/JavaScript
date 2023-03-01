/* Crie uma função que retorna a string "Olá," concatenada com um argument test (a ser passado para a função) e com ponto de exclamação "!" no final. */



const comprimentar2 = (nome) => 'ola2, ' + nome + '!'
console.log(comprimentar2('Ana'))


function comprimenta3(nome) {
    return 'Olá3, ' + nome + '!'
}
console.log(comprimenta3('Rut'))

module.exports.retornar = comprimentar2('nome')
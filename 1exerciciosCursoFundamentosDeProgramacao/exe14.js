/* Desnvolva uma função que receba como parâmetro um objeto e retorne um array de arrays, em que cada alement é um array formado pelos pares chave/valor que corresponde a um atrinuto do objeto. */

function objParaArray (obj) {

    return Object.entries(obj)
}
console.log(objParaArray({nome: 'rodrigo', idade: 35, peso: 80}))
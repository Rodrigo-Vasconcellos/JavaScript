/* vc escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo, o nome de uma propriedade contida nesse objeto. Em seguida, retornara uma cópia desse objeto sem a propriedadeespecificada no segundo paramero  */

function removerPropriedade1 (obj, propriedadeContidaNoObj) {
    const copia = obj
    delete copia[propriedadeContidaNoObj]
    return copia
}
console.log(removerPropriedade1({a:1, b:2, c:3}, "a"))

const removerPropriedade2 = (obj, propriedade) => { 
    delete obj[propriedade]
    return obj
}
console.log(removerPropriedade2({a:1, b:5, c:3}, "a"))
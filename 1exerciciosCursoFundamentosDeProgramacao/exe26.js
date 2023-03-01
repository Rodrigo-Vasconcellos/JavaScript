/** Desenvolva uma função que receba uma string e retorne somente as consoantes, ou seja, sem as vogais.*/

const vogais = function (elemento) {
    if( elemento != 'a' && elemento != 'e' && elemento != 'i' && elemento != 'o' && elemento != 'u' && elemento != 'A' && elemento != 'E' && elemento != 'I' && elemento != 'O' && elemento != 'U' )
    return elemento    
}

function removerVogais (string) {
    return [...string].filter(vogais).join('')
}
console.log(removerVogais('A fundamentos !!!'))
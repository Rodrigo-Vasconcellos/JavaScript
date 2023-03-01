/**desenvolva uma função que receba um caractere e uma string como parâmetro e retorna quantas vezes o caractere repete na string  */

function quantidadeCaracter (letra, frase) {
    let contador = 0
    for (let i= 0; i < frase.length; i++)
        if (frase.charAt(i) === letra)
        contador++
    
    
    return contador
}

console.log(quantidadeCaracter('r', 'rodrigoR aaa  aaa'))

 


function contarLetras (letra, frase) {
    
    return [...frase].filter(function (caracter) {
        return  caracter === letra}).length
}

console.log(contarLetras('R', 'rodrigoR aaa  aaa'))


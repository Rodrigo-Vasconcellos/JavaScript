/**crie uma funçao que receba uma string e retorne quantas palavras ela tem  */

function quantidadedePalavras (frase) {
    const resposta = (frase.match(/ /g) || []).length
    return resposta 
}
console.log(quantidadedePalavras('oi oi oi oj'))


function contarPalavras (frase) {
    const resposta =  frase.split(' ')
    return resposta.length
}
console.log(contarPalavras('oi oi oi oj'))
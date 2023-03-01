/* Crie uma função que receba quatro números como parâmetros (numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre o minimo e maximo. Quando o parãmetro incluso for true, tenha 'entre' como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual aminimo ou a maximo */

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo 
}


console.log(estaEntre(5, 1, 10))   
console.log(estaEntre(5, 1, 10, true))  
console.log(estaEntre(5, 12, 10)) 



function estaEntre2(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo 
}
console.log(estaEntre2(5, 1, 10))   
console.log(estaEntre2(5, 1, 10, true))  
console.log(estaEntre2(5, 12, 10)) 


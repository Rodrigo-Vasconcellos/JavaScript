/*escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado. */


function contador(testo, quant) {  
    let resultado = []
    for (  let i = 0; i < quant; i++) 
        resultado.push (testo)
              
    return resultado
}
console.log(contador('5b', 4))

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}
console.log(repetir(' test', 3))


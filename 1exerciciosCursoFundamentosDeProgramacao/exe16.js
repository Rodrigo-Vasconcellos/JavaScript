/* desenvolva uma função que receba um número correspondente a um ano e retorna se ele é bissexto ou não */

const anoBissexto = (ano) => (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0
console.log(anoBissexto(2024))


function anoBissexto1 (ano) {
    const multiplode4 = ano % 4 == 0
    const multiplode100 = ano % 100 == 0
    const multiplode400 = ano % 400 == 0
    return (multiplode4 && !multiplode100) || multiplode400
}
console.log(anoBissexto1(2024))

function anoBissexto2 (ano) {
   return new Date(ano, 1, 29).getDate() === 29  
}
console.log(anoBissexto2(2024))




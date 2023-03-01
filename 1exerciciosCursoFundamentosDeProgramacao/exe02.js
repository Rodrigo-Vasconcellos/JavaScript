/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.  OBS.: considere que o ano tem 365 dias*/

const idadeEmDias = function (idade) {
    return (365 * idade)
}
console.log(idadeEmDias(1))



function idade2(idadeEmAno) {
    return 365 * idadeEmAno     
} 
console.log(idade2(70))


const idade3 = (idadeEmAno3) => 365 * idadeEmAno3
console.log(idade3(25))
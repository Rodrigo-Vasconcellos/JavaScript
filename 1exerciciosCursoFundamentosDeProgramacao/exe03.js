/* desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele recebe por hora. o retorno da função deve ser a string "salário igual a R$ ...", em que  ... é o quanto o funcionário ganhou no mês. */

function salario(quantidadeDeHoras, valorDe1Hora) {
    const salario = quantidadeDeHoras * valorDe1Hora
    const salarioLiquido = salario - salario * .3
    return `salário igual a R$ ${salarioLiquido}`
}
console.log(salario(5, 100))


const salario2 = (quantHoras, Valor1H) => ((quantHoras * Valor1H) - (quantHoras * Valor1H * .3))
console.log(`salário igual a R$ ` + salario2(5, 100))



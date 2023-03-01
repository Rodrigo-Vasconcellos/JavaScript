
function quatroOperaçoesMatematicas (valor1, valor2) {
    const soma = valor1 + valor2
    const subtracao = valor1 - valor2
    const mutiplicacao = valor1 * valor2
    const divisao = valor1 / valor2
    return `${soma} ${subtracao} ${mutiplicacao} ${divisao}`
} 
console.log(quatroOperaçoesMatematicas(10, 5))


function calcularOperadores (valor1, valor2) {
    console.log(valor1 + valor2, valor1 - valor2, valor1 * valor2, valor1 / valor2)
}
calcularOperadores(10, 5)


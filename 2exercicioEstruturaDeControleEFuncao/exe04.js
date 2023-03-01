function divisao (dividendo, divisor) {
    const resto = dividendo % divisor
    //const resultado = (dividendo - resto) / divisor 
    const resultado = Math.floor(dividendo / divisor)
    return `resposta = ${resultado}, resto da divisao = ${resto}`
}
console.log(divisao(10,3))
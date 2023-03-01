function formulaBaskara (a, b, c) {
    const delta = Math.pow(b,2) -4 * a * c
    let resposta2 = 0
    let resposta1 = 0
    if (delta < 0 )
    return 'delta negativo' + delta
    else
    resposta1 = (-b + Math.sqrt(delta)) / (2 * a)
    resposta2 = (-b - Math.sqrt(delta)) / (2 * a)
    return `x = ${resposta1}, x = ${resposta2}, delta: ${delta} ` 

}
console.log(formulaBaskara(1,2,-3))
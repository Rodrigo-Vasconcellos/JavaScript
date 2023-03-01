/* escreva uma função que receba um lavor booleano ou numéric. se o pârametro fornecido for booleano, o retorno da função deverá ser o inverso. */
function inverso(valor) {
    const tipo = typeof valor

    if (tipo == 'boolean') return !valor
    else if (tipo == 'number') return -valor
    else return `boleano ou numero esperados, mas o parametro é do tipo ${valor}`
}
   

console.log(inverso(1))
console.log(inverso(-5))
console.log(inverso('opa'))
console.log(inverso(true))


const inverso2 = (valor1) => {
    const tipo1 = typeof valor1

    if (tipo1 == 'boolean') return !valor1
    else if (tipo1 == 'number') return -valor1
    else return `boleano ou numero esperados, mas o parametro é do tipo ${valor1}`
}

console.log(inverso2(0))
console.log(inverso2(-20.5))
console.log(inverso2('opa'))
console.log(inverso2(false))
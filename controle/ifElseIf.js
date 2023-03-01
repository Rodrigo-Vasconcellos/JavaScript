Number.prototype.entreOsValores = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entreOsValores(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entreOsValores(7, 8.99)) {
        console.log('Aprovado')    
    } else if (nota.entreOsValores(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entreOsValores(0, 3.99)) {
        console.log('Reprovado') 
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(6.5)
imprimirResultado(3.99)
imprimirResultado(11)
imprimirResultado(-1)
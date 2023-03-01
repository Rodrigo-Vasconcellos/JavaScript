const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('quadro de honrra')  
            break
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('recuperação') 
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota inválida')          
    }
    console.log('fim!!!')
}

imprimirResultado(10)
imprimirResultado(9.5)
imprimirResultado(8.5)
imprimirResultado(7.5)
imprimirResultado(6.5)
imprimirResultado(5.5)
imprimirResultado(4.5)
imprimirResultado(3.5)
imprimirResultado(2.5)
imprimirResultado(1.5)
imprimirResultado(0.5)
imprimirResultado(-1)
imprimirResultado(11)
imprimirResultado('teste')


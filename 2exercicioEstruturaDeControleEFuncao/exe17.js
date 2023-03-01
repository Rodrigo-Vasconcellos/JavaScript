function aumento ( salario, plano) {
    switch (plano) {
        case 'A':
            return (salario * 1.1).toFixed(2)
            break
        case 'B':
            return (salario * 1.15).toFixed(2)
        case 'C':
            return (salario * 1.2).toFixed(2)
            break
        default:
            return 'plano invalido'    
    }
}
console.log(aumento(100, 'A'))
console.log(aumento(100, 'B'))
console.log(aumento(100, 'C'))
console.log(aumento(100, 'oi'))
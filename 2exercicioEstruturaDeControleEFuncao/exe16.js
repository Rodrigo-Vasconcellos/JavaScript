function operacoes (a, operador, b) {
    switch(operador){
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default:
            return 'erro'
    }
}

console.log(operacoes(4, '+', 2))
console.log(operacoes(4, '-', 2))
console.log(operacoes(4, '*', 2))
console.log(operacoes(4, '/', 2))
console.log(operacoes(4, 'oi', 2))
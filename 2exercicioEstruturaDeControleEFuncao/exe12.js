function calcularFatorial (numero) { 
    if (numero == 0 || numero == 1) {
        return 1
    }
    if(numero >= 2){
        let resposta = numero
        let primeiroMutiplicador = numero - 1
        for (let i = primeiroMutiplicador; i > 1; i--) {
            resposta = resposta * i     
        }
        return resposta
    } else {
        return 'nao tem fatoria de strig ou numero negarivo'
    }   
}    
    
console.log(calcularFatorial(1))
console.log(calcularFatorial('oi'))
console.log(calcularFatorial(-4))


function calcularFatorial2 (numero) {
    if(numero == 0){
       return 1 
    } else if (numero >= 1) {
        return numero * calcularFatorial2(numero - 1)
    } else {
        return 'nao existe' 
    }
}
console.log(calcularFatorial2(1))
console.log(calcularFatorial2(0))
console.log(calcularFatorial2(4))
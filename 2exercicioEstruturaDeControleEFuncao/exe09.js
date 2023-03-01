function aprovados (nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40){
        return `aprovado com nota ${notaCorrigida}`
    } else {
        return `reprovado com nota ${notaCorrigida}`
       
    } 
}


function arredondar (nota) {
 if (nota % 5 > 2){ 
        return (5 - (nota % 5) ) + nota
    } else {
            return nota
    }
}

console.log(aprovados(84))
console.log(aprovados(37))


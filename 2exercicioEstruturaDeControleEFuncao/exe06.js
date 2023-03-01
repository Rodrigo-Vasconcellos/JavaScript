function investimentoMensal (investimento, taxa, tempo) {  
    console.log(0, investimento) 
    let mensalidade = investimento
    for (let i = 0;i < tempo; i++) {
        let juros =   (investimento) * (1 + ( taxa / 100)) * 1
        let aluguel = (investimento) * (( taxa / 100)) * 1
        investimento = (juros + mensalidade)
        
        console.log(i+1, investimento.toFixed(2), aluguel.toFixed(2)) 

    }    
}
investimentoMensal(1000, 1, 5)



console.log('')





function jurosComposto (investimento, taxa, tempo) {
    let resposta = 0
    const taxaElevadoAoTempo = (1+( taxa / 100)) ** tempo         
    const juroComposto = investimento * (taxaElevadoAoTempo) 
    resposta = (juroComposto).toFixed(2)
    
    return resposta 
}
console.log(jurosComposto(1000, 1, 5))


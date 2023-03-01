

function desempenhoNosJogos (stringDeNumeros) {
    let arrayPontos = stringDeNumeros.split(' ')
    let quantidadeDeRecorde = 1
    let piorJogo = 1
    let maiorPontuacao = arrayPontos[0]
    let menorPontuacao = arrayPontos[0]
    
    for(let i = 0; i < arrayPontos.length; i++) {
        if(arrayPontos[i] > maiorPontuacao) {
            maiorPontuacao = arrayPontos[i]
            quantidadeDeRecorde++   
        } else if(arrayPontos[i] < menorPontuacao) {
            menorPontuacao = arrayPontos[i]
            piorJogo = i + 1
        }
    }
    return [quantidadeDeRecorde, piorJogo]
}
console.log(desempenhoNosJogos('10 20 20 8 25 3 0 30 1'))
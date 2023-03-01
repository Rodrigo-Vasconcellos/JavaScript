/**desenvolva uma função que recebe um numero de 1 a 10. Internamente da função, será gerado um número aleatório de 1 a 10. A função devera retornar se o paramento de entrada foi igual ao numero sorteado internamente. Se o valor fornecido foi o sorteado retornara ‘parabéns o numero sorteado foi o x’ se não foi égua retornara ‘que pena o numero sorteado foi X e seu número escolhido foi Y’. */


const resposta = function (min, max) {
    return  Math.floor(Math.random() * (max - min + 1) + min )
}



function jogoAcerteONumero (numero1a10) {
    //const min = 1
   // const max = 10
   // const aleatorio =  Math.floor(Math.random() * (max - min + 1) + min )

    const comparacao = resposta(1,10)

    if (comparacao === numero1a10)
    return `parabéns o numero sorteado foi o ${comparacao}`
    else
    return `que pena o numero sorteado foi ${comparacao} e seu número escolhido foi ${numero1a10}`
}

console.log(jogoAcerteONumero(10))
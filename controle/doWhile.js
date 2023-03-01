function inteiroAleatorio(minimo, maximo) {
    const inteiro = Math.random() * (maximo - minimo) + minimo  
    return Math.floor(inteiro) 
}

let opcao = 0
let i = 0

while (opcao != -1) {
    i++
    opcao = inteiroAleatorio(-1, 10)
    console.log(i + ' tentetiva: ' + opcao)
}

console.log('fim!')
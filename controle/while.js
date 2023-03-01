function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
let i = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    i++
    console.log(i + '° tentativa: ' + opcao)
} while (opcao != -1)

console.log('fim')
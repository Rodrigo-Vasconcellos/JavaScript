//
const alunos = [
    { nome: 'jaoa', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true }
]
console.log(alunos.map(elemento => elemento.nota))
const resultado = alunos.map(elemento => elemento.nota).reduce(function(acumulador, atual) {
    console.log(acumulador , atual)
    return acumulador + atual
}, 0 )

console.log(resultado)


const alunos1 = [
    { nome: 'jaoa', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsista: true }
]
//funçoes de callback
const arraybolsistas = function (elementoBosista) {
    return elementoBosista.bolsista
}
const eBolsista = function (acumulador, elemento) {
    return acumulador + elemento  
}
const todosBolsistas = function (acumulador, elemento) {
    return acumulador && elemento
}
const algumbolsista = (acumulador, elemento) => acumulador || elemento


// reduzindo alunos 1 para um numero 
const resultado1 = alunos1.map(arraybolsistas).reduce(eBolsista)
const resultado2 = alunos1.map(arraybolsistas).reduce(todosBolsistas)
const resultado3 = alunos1.map(arraybolsistas).reduce(algumbolsista)

console.log('quantos bolsistas ' + resultado1)
console.log(`todos sao bolsistas ${resultado2}`)
console.log(`algum aluno  é bolsista ${resultado3}`)
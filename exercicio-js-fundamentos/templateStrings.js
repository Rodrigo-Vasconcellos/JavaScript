const nome = 'rebeca'
const concatenacao = 'ola ' + nome + '!'
const template = `
ola
${nome}!`

console.log(concatenacao, template)

//Expressões 
console.log(`1 + 1 = ${1 + 1}`)

// Uma função dentro de uma expressão 
const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}!`)
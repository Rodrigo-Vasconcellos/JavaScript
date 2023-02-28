//para acessar o modoloA e o moduloB

//require()  serve para importar alguma coisa de outros módulos  

// por que devo usar ./ junto com moduloA ?  porque eu estou referenciando um modulo que está presente dentro do meu sistema, utilizando um caminho relativo
// ./moduloA    quer dizer que está na mesma pasta 
// ../../   que dizer sai de 2 pasta 
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')
console.log (moduloA)
console.log(moduloA.ola)
console.log(moduloA.bemVido)
console.log(moduloA.ateLogo)

console.log(moduloB)
console.log(moduloB.bomdia)
console.log(moduloB.boaNoite())



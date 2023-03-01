const notas = [6.5, 8, 10, 2, 5.9, 9.1]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    neme: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 55
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}


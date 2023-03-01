const alunos = [
    { nome: 'joao', nota: 7.9 },
    { nome: 'maria', nota: 9.9 }
]

//imperativo
let total = 0
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}
console.log(total / alunos.length )

//declarativa
const arrayNotas = elemento => elemento.nota
const soma = (acumulador, elemento) => acumulador + elemento
const total1 = alunos.map(arrayNotas).reduce(soma) 
console.log(total1 / alunos.length)
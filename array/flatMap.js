const escola = [{
    nome: 'tuma A',
    alunos: [{
        nome: 'rodrigo',
        nota: 7.5
    }, {
        nome: 'ana',
        nota: 6.5
    }]
}, {
    nome: 'turma B',
    alunos: [{
        nome: 'joao',
        nota: 8
    }, {
        nome: 'carlos',
        nota: 5
    }]
}]

const notasAlunos = function (aluno) {
    return aluno.nota
}

const notasTurma = function (turma) { 
    return turma.alunos.map(notasAlunos)
}

const notas1 = escola.map(notasTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(notasTurma)
console.log(notas2)
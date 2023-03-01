
// com uma funçao construtora, usar do operador new, e instanciar objetos apartir desta função 
function aula(nome, cargaHoraria) {
    this.nome = nome
    this.cargaHoraria = cargaHoraria
}


const aula1 = new aula('matematica', 40)
const aula2 = new aula('portugues', 25)
console.log(aula1, aula2)

// quando vc usar o operador new ele cria um novo objeto e o protótipo dele aponta para a função escolhida
// exemplo aula { nome: 'matematica', cargaHoraria: 40 } aula { nome: 'portugues', cargaHoraria: 25 }
//classe
class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('joao') 
p1.falar()


//função construtora
function pessoa1 (nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`meu nome é ${this.nome}`)
    }    
}

const pp1 = new pessoa1('rod')
pp1.falar()

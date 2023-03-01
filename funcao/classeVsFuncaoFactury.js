// esta forma o brouse não encontra a variável 
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



// esta forma o brouse encontra a variável  
const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('rodrigo')
p2.falar()





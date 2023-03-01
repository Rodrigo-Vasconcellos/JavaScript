// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // não é recomendado
//o avo aponta para o Objetc.prototype

const avo = { attr1: 'A' }
//o pai aponta para o avo  (para estabelecer a relação de protótipo utiliza o __proto__)
const pai = { attr2: 'B', __proto__: avo, attr3: '3' }
//o filho a ponta para o pai 
const filho = { attr3: 'C', __proto__: pai }
//primeiro ele mostra os atributos do filho quando nao encontra procura nos protótipos e se já encontrou no filho não pega os do protótipo 
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'f40',
    velMax: 324 // shadowing   é o sombreamento 
}
//para chamar o metodo do meu protótipo utiliso o super
const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
//para estabelecer a relação de protótipo vou usar a função setPrototypeOf utilizando como primeiro parâmetro o meu objeto e como segundo parâmetro meu protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

//para chamar o objeto 
console.log(ferrari)
console.log(volvo)

//para chamar os métodos do protótipo
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
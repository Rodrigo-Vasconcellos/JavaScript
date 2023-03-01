const sequencia = {
    _valor: 1, // Por convenção quando coloca _ indica que esta variável está restrita a este objeto  
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this.valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 8
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
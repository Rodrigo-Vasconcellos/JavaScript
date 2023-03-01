class lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor( mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(a => this.lancamentos.push(a))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(a =>{
            valorConsolidado += a.valor
        })
        return valorConsolidado
    }
} 
const salario = new lancamento('salario', 45000)
const contaLuz = new lancamento('luz', -220)

const contas = new cicloFinanceiro(6,2018) 
contas.addLancamentos(salario, contaLuz) 
console.log(contas.sumario())
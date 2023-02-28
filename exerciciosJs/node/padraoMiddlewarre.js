//middleeare pattern ou chain of responsibility ou cadeia de responsabilidade 
const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto) => contexto.valor3 = 'mid3'
// constante axecutar recebe uma função que tem como parâmetro contesto, e um array de funções chamado middlewares
//dentro da função executar foi criado uma outra função executarPasso que vai receber como parâmetro índice 
// verificar se o array é true && se o índice do array é menor que o tamanho do array && executar o array passando o índice e passando como parâmetro o contesto, função next que vai chamar a função executarPasso com parâmetro indice+1 

//no final peso para executar o passo 0 
 

const executar = (contexto, ...middlewares) => {
    const executarPasso = indice =>{
        middlewares && indice < middlewares.length && 
            middlewares[indice](contexto, () => executarPasso(indice + 1))
    }
    executarPasso(0)
}

const contexto = {}
executar(contexto, passo2, passo1, passo3)
console.log(contexto)
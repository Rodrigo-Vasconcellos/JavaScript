console.log('exercício 1')
function comprimentarUsuario (nome) {
    return `olá, ${nome}!`
}
console.log(comprimentarUsuario('rodrigo'))

const compUsuario = (nome) => `olá, ${nome}!`
console.log(compUsuario('naiara'))

console.log('')


console.log('exercício 2')
const anosParaDia = (idade) => 365 * idade
console.log(anosParaDia(25))

function anosDias (idade) {
    const resposta = idade * 365
    return `${idade} anos tem ${resposta} dias`
}
console.log(anosDias(25))
console.log('')


console.log('exercício 3')
const salario = (quantidade, valorH) => quantidade * valorH
console.log(salario(5, 100))

const salario1 = (quantidade, valorH) => {
    const resposta = quantidade * valorH
    return 'salario: ' + resposta + ' R$'
}
console.log(salario1(6, 100))
console.log('')


console.log('exercício 4')
function nomeDoMes (numero) {
    switch (numero){
        case 1:
            return 'janeiro'
            break
        case 2:
            return 'fevereiro'
            break
        case 3:
            return 'março'        
            break
        case 4:
            return 'abril'
            break 
        default:
            return 'erro '        
    }
}
console.log(nomeDoMes(2))
console.log(nomeDoMes(5))
console.log('')


console.log('exercício 5')
function maiorOuIgual (n1, n2) {
   if (typeof n1 != 'number' || typeof n2 != 'number') {
    return false 
   } else if (n1 >= n2) {
    return true
   } else {
    return false
   }
    
}
console.log(maiorOuIgual(1,1))
console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(1,2))
console.log(maiorOuIgual(2,1))
console.log(maiorOuIgual(1,'1'))
console.log('')

function test (n1, n2) {
    if (typeof n1 != typeof n2)
    return false
    else
    return n1 >= n2
}
console.log(test(1,1))
console.log(test(0,0))
console.log(test(1,2))
console.log(test(2,1))
console.log(test(1,'1'))
console.log('')


console.log('exercício 6')
function inversor (n) {
    if (typeof n == 'boolean') return !n
    else if (typeof n == 'number') return -n
    else return 'o parametro nao é do tipo numerico ou booleano'
}
console.log(inversor(5))
console.log(inversor( true))
console.log(inversor(false))
console.log(inversor('oi'))
console.log(inversor('5'))
console.log('')


console.log('exercício 7')
function entreMimMax (numero, min, max, inclusivo = false) {
    if (inclusivo == true)
        if (numero >= min && numero <= max) return true
        else return false
    else 
        if (numero > min && numero < max) return true
        else return false    
}
console.log(entreMimMax(1,1,5))
console.log(entreMimMax(1,1,5,true))
console.log('')

function entreMimMax1 (numero, min, max, inclusivo = false) {
    if(inclusivo) return numero >= min && numero <= max
    
    return numero > min && numero < max
}
console.log(entreMimMax1(1,1,5))
console.log(entreMimMax1(1,1,5,true))
console.log('')

function entreMimMax2 (numero, min, max, inclusivo = false) {
    return inclusivo ? numero >= min && numero <= max : numero > min && numero < max
}
console.log(entreMimMax2(1,1,5))
console.log(entreMimMax2(1,1,5,true))
console.log('')


console.log('exercício 8')
function multiplicador (valor, repetidor) {
    let resposta = 0
    if (typeof valor == 'number' && typeof repetidor == 'number') 
        if (valor >= 0 && repetidor >= 0){
            for ( let i = 0; i < repetidor; i++) {
            resposta += valor
            }
            return resposta
        } else {
          return 'nao é permitido multiplicar numeros negativos'  
        } 
    else {  
        return'nao é permitido multoplicar string e numeros'
    } 

}
console.log(multiplicador(5, 3))
console.log(multiplicador(0, 3))
console.log(multiplicador(5, -3))
console.log(multiplicador('5', 3))
console.log('')


console.log('exercício 9')
const repetidor = (elemento, quantidade) => {
    let resposta = []
    for (let i = 0; i < quantidade; i++){
         resposta.push(elemento)
    }
    return resposta
}
console.log(repetidor('oi', 4))
console.log('')

const repetidor1 = (elemento, quantidade) => Array(quantidade).fill(elemento)
console.log(repetidor1('oi', 4))
console.log('')


console.log('exercício 10')
const repetidor3 = ( quantidade) => Array(quantidade).fill('+').join('')
console.log(repetidor3(4))
console.log('')


console.log('exercício 11')
function primEUlt (colecao) {
    return [colecao.shift(),colecao.pop()]
}
console.log(primEUlt([1,2,3,4,5,6]))
console.log(primEUlt([1,2,3,4,5,6,'fim']))
console.log('')


console.log('exercício 12')
function removerProp (obj, atributo) {
    let copia = obj
    delete copia[atributo]
    return copia

}
console.log(removerProp({nome: 'rodrigo', idade: 35, id: 40}, 'idade'))
console.log('')


console.log('exercício 13')
function retornaNum (array) {
    let resposta = []
    for (let i of array){
        if (typeof i == 'number')
         resposta.push(i)
    }
    return resposta
}    
console.log(retornaNum([1,2,3,'oi']))
console.log('')

function retornaNum1 (array) {
    return array.filter(Number)
}
console.log(retornaNum1([1,2,3,'oi']))
console.log('')


console.log('exercício 14')
function objArray (obj) {
    return Object.entries(obj)
}
console.log(objArray({nome: 'rodrigo', idade: 35}))
console.log('')


console.log('exercício 15')

function retornePares (array) {
    let novoArray = array.map(function(valor, indice) {
        if (valor % 2 == 0 && indice % 2 == 0)
        return valor 
    })
   return novoArray
}
console.log(retornePares([1, 2, 3, 5, 6, 8, 4]))


const parDeIndicePar =  (valor, indice) => {
    if (valor % 2 == 0 && indice % 2 == 0)
    return valor
}
function retornePares1 (array) {
    let novoArray = array.filter(parDeIndicePar) 
    return novoArray
}
console.log(retornePares1([1, 2, 3, 5, 6, 8, 4]))
console.log('')


console.log('exercício 16')

function anoBissexto (ano) {
    if((ano % 4 == 0 && ano % 100 != 0 ) || ano % 400 == 0)
    return true  
    else 
    return false
}
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
console.log(anoBissexto(2022))
console.log('')


console.log('exercício 17')

const soma = (acumulador, numero) => acumulador += numero  

function somaArray (arrayDeNumero) {
    let soma = 0
    arrayDeNumero.forEach(function (elemento) {
       soma += elemento
    })   
    return soma  
}

console.log(somaArray([2,2,2]))

console.log('')
console.log('exercício 18')

function despesasTotais (arrayDeProdutos) {
    let arrayPreco = arrayDeProdutos.map(function(elemento) {
        
        return elemento.preco
    })
    return arrayPreco
   
    
}


console.log(despesasTotais([
    { nome: 'rodri', categoria: 'informação', preco: 50 },
    { nome: 'rodri', categoria: 'informação', preco: 100 },
    { nome: 'rodri', categoria: 'informação', preco: 10 },
    { nome: 'rodri', categoria: 'informação', preco: 40 }
]))





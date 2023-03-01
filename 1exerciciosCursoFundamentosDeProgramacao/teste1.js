//1
console.log('exercicio 1')
function comprimentar (nome) {
    return 'Olá, ' + nome
}
console.log(comprimentar('rodrigo') + '!' )

const comprimentar1 = (nome) => 'Olá, ' + nome + '!'
console.log(comprimentar1('ana'))

function comprimentar2 (nome) {
    return `Olá, ${nome}!`
}
console.log(comprimentar2('bruno'))
console.log('')

//2
console.log('exercicio 2')
function idadeEmDias (idadeEmAno) {
    return idadeEmAno * 365
}
console.log(idadeEmDias(25))

const idadeEmDias1 = (idadeEmAno) => idadeEmAno * 365
console.log(idadeEmDias(70))
console.log('')

//3
console.log('exercicio 3')
function salario (horasTrabalhadas, valorDe1Hora) {
    const salario = horasTrabalhadas * valorDe1Hora 
    return `Sálario igual a R$ ${salario}` 
}
console.log(salario(10, 100))

const salario1 = (horasTrabalhadas, valorDe1Hora) => 'Sàlario igual a R$ ' + horasTrabalhadas * valorDe1Hora
console.log(salario1(20, 100)) 
console.log('')

//4
console.log('exercicio 4')
const calendario = function (numero) {
    switch (numero) {
        case 1: 
            console.log('janeiro') 
            break
        case 2: 
            console.log('fevereiro') 
            break    
        case 3: 
            console.log('março') 
            break  
        case 4: 
            console.log('abril') 
            break  
        case 5: 
            console.log('maio') 
            break  
        case 6: 
            console.log('juho') 
            break  
        case 7: 
            rconsole.log('julho') 
            break  
        case 8: 
            console.log('agosto') 
            break  
        case 9: 
            console.log('setembro') 
            break  
        case 10: 
            console.log('outubro') 
            break  
        case 11: 
            console.log('novembro') 
            break  
        case 12: 
            console.log('dezembro') 
            break      
        default:
           console.log('não existe') 
    }     
}
calendario(2)   
calendario(12)
calendario(13)
calendario('oi')

const calendario1 = function (numero) {
    switch (numero) {
        case 1: 
        return  'janeiro' 
            break
        case 2: 
        return  'fevereiro'
            break    
        case 3: 
        return'março' 
            break  
        case 4: 
        return 'abril' 
            break  
        case 5: 
        return  'maio' 
            break  
        case 6: 
        return 'juho'
            break  
        case 7: 
        return 'julho' 
            break  
        case 8: 
        return 'agosto' 
            break  
        case 9: 
        return 'setembro' 
            break  
        case 10: 
        return'outubro' 
            break  
        case 11: 
        return 'novembro'
            break  
        case 12: 
        return 'dezembro' 
            break      
        default:
           return 'não existe' 
    }     
}
console.log(calendario1(3))   
console.log(calendario1(11))
console.log(calendario1(13))
console.log(calendario1('oi'))
console.log('')

// 5
console.log('exercicio 5')
function PrimeiroMaior (valor1, valor2) {
    if (typeof(valor1) != typeof(valor2)) {
        return false
    } else if (valor1 >= valor2){
        return true
    } else {
        return false
    }
}

console.log(PrimeiroMaior(5, 1))
console.log(PrimeiroMaior(2, 10))
console.log(PrimeiroMaior(1, '1'))
console.log(PrimeiroMaior(0, 0))
console.log('')

//6 
console.log('exercicio 6')

function inverso (numeroOuBooleano) {
    if (typeof numeroOuBooleano == 'number') {
        return -numeroOuBooleano
    } else if (numeroOuBooleano == true) {
        return false
    } else if (numeroOuBooleano == false) {
        return true
    } else {
        return  'o parametros é do tipo errado'
    } 
}
console.log(inverso(2))
console.log(inverso(true))
console.log(inverso('oi'))
console.log(inverso(false))
console.log('')

//7  
console.log('exercicio 7')
function entreVAlores (valor, minimo, maximo, inclusivo = true) {
    if(typeof valor == 'number' && typeof minimo == 'number' && typeof maximo == 'number') { 
        if (inclusivo == false){
            if (valor >= minimo && valor <= maximo) {
                return 'esta entre ou igual os valores'
            }else {
                return 'não esta entre ou igual os valores'
            }
        } else  {
            if (valor > minimo && valor < maximo) {
                return 'esta entre os valores'
            }else {                                                   
                return 'não esta entre os valores'  
            }  
        } 
    } else { 
        return 'não foi usado numeros nos valores'
    }
    
}    
console.log(entreVAlores(8, 1, 8, false ))  
console.log(entreVAlores(6, 5, 10))
console.log(entreVAlores(5, 5, 8, false))
console.log(entreVAlores(5, 'oi', 10))
console.log('')

//8
console.log('exercicio 8')
function mutiplicacao (valor1, mutiplicador) {
    if (valor1 >= 0 && mutiplicador >= 0) {
        let resposta = 0
        for (let i = 0; i < mutiplicador; i++) { resposta += valor1 }
        return `mutiplicação -> ${valor1} x ${mutiplicador} = ${resposta}`
    } else {
        return 'erro'
    }  
}
console.log(mutiplicacao(0, 5))
console.log('')

//9
console.log('exercicio 9')
function repetidor (elemento, quantidade) {
    let resposta = []
    for (let i = 0; i < quantidade; i++) { resposta.push(elemento) }
    return resposta
}
console.log(repetidor('rodri ', 3))

function repetidor1 (elemento, quantidade) {
    return Array(quantidade).fill(elemento) 
}
console.log(repetidor1(8, 3))
console.log('')

//10 
console.log('exercicio 10')
function repetirMais (quantidade) {
    let resposta = ''
    for (let i = 0; i < quantidade; i++) { 
        resposta += '+' } 
        return resposta
}
console.log(repetirMais(5))

function repetirMais1 (quantidade) {
    return Array(quantidade).fill('+').join('')
}
console.log(repetirMais1(4))
console.log('')

// 11
console.log('exercicio 11')
function primeiroEUltimo (array) {
    const primeiro = array[0]
    const ultimo = array.pop(array)
    const resposta = Array(primeiro, ultimo)
    return resposta
}
console.log(primeiroEUltimo([1, 5, 8, 'ro', 'rodri'] ))

const primeiroEUltimo1 = (array) => Array(array[0], array.pop(array))
console.log(primeiroEUltimo1([7,8,9,'ro','ra']))
console.log('')

//12
console.log('exercicio 12')
function removerPropriedade (objeto, atributo) {
    const copia = objeto
    delete copia[atributo]
    return copia
}
console.log(removerPropriedade({nome: 'rodrigo', id: 002, idade: 33}, "id"))
console.log('')

//13
console.log('exercicio 13')
const filtrarNumeros = (vetor) => vetor.filter(numeros => typeof numeros === 'number') 
console.log(filtrarNumeros([1,2,3,'a','4',5]))

function filtrarNumeros1 (vetor) {
    resposta = []
    for(let numeros of vetor)
        if (typeof numeros === 'number')
            resposta.push(numeros)
    return resposta
}
console.log(filtrarNumeros1([1,2,3,'a','4',5]))
console.log('')

//14 
console.log('exeercicio 14')
function objetoParaArray(objeto){
    const chave = Object.keys(objeto)
    const resposta = chave.map( chave => [chave, objeto[chave]])  
    return resposta  
}    
console.log(objetoParaArray({nome: 'rodrigo', idade: 35, alura: 1.69}))

function objetoParaArray1(objeto) {
    return Object.entries(objeto)
}
console.log(objetoParaArray1({nome: 'rodrigo', idade: 38, alura: 1.85}))
console.log('')

//15
console.log('exeercicio 15')
function recebeSomenteOsParesComIndicesPares (array) {
    let resultado = []
    for (let i = 0; i < array.length; i += 2){
        const numeroPar = array[i] % 2 == 0

        if (numeroPar )
            resultado.push(array[i])
    }
    return resultado
}    
console.log(recebeSomenteOsParesComIndicesPares([2,3,5,6,8,]))

function recebeSomenteOsParesComIndicesPares1 (array) {
    return array.filter((numero, indice) =>{
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
    
}
console.log(recebeSomenteOsParesComIndicesPares1([1,3,5,6,]))
console.log('')

//16 
console.log('exercicio 16')
function checarAnobissexto (ano) {
    const multiplode100 = ano % 100 == 0
    const multiplode400 = ano % 400 == 0
    const multiplode4 = ano % 4 == 0
    return (multiplode4 && !multiplode100) || multiplode400  
        
}
console.log(checarAnobissexto(2021))

function checarAnobissexto1 (ano){
    return new Date(ano, 1 , 29).getDate() === 29
}
console.log(checarAnobissexto1(2021))
console.log(checarAnobissexto1(2024))
console.log('')
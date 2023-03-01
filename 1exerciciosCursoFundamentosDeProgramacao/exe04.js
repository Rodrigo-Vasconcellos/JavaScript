/* crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondentecomo uma string. */

const nomedoMes = (numero) => {
    switch(numero){
        case 1: 
            console.log('janeiro') 
            break
        case 2: 
            console.log('fevereiro')
            break
        case 3: 
            console.log('março')
            //return 'março'
            break
        case 4: 
            console.log('abril') 
            break
        case 5: 
            console.log('maio') 
            break
        case 6: 
            console.log('junho') 
            break
        case 7: 
            console.log('julho' )
            break
        case 8: 
            console.log('agosto' )
            break
        case 9: 
            console.log('setenbro' )
            break
        case 10: 
            console.log('outubro')
            break
        case 11: 
            console.log('novembro' )
            break
        case 12: 
            console.log('desembro' )
            break
        default: 
            console.log('valor imvalido')
    }
    console.log('fim')
}
nomedoMes(3)

const nomedoMes2 = (numero) => {
    switch(numero){
        case 1: 
            return'janeiro'          
        case 2: 
            return'fevereiro'           
        case 3: 
            return 'março'          
        case 4: 
            return 'abril'          
        case 5: 
            return 'maio'          
        case 6: 
            return 'junho'          
        case 7: 
            return 'julho'            
        case 8: 
            return 'agosto'            
        case 9: 
            return 'setenbro'             
        case 10: 
            return 'outubro'           
        case 11: 
            return 'novembro'             
        case 12: 
            return'dezembro' 
        default: 
            return 'valor imvalido'
    }  
}   

console.log('o mês escolido foi ' + nomedoMes2(3))


function nomeMes(numero) {
    const nome = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

    return nome[--numero]
}

console.log(nomeMes(2))
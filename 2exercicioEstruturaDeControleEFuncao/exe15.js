function carros (tipo) {

    switch (tipo) {
        case 'hach':
            return 'compra realizada'
            break
        case 'sedam':      
        case 'motocicleta': 
        case 'caminhonete': 
            return 'tem ceteza que vai comprar '
            break
        default:
            return 'nao trabalho com esse tipo de altomovel'    
    }
}
console.log(carros('hach'))
console.log(carros('sedam'))
console.log(carros('motocicleta'))
console.log(carros('carroça'))

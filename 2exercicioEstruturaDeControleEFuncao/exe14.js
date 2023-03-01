function situaçaoDoEstoqueDeFrutas (nome) {

    switch (nome) {
        case 'maçã':
            return 'nao vendemos maçã'
            break
        case 'kiwi':  
            return 'esta em falta'
            break
        case 'melancia':  
            return 'custa 3 reais o quilo'
            break
        default:
            return 'nao existe'    
    }
}
console.log(situaçaoDoEstoqueDeFrutas('maçã'))
console.log(situaçaoDoEstoqueDeFrutas('kiwi'))
console.log(situaçaoDoEstoqueDeFrutas('melancia'))
console.log(situaçaoDoEstoqueDeFrutas('limao'))
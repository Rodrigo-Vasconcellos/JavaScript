function produtos (codigo) {
    let preco = 0
    switch(codigo) {
    case 100: 
        preco = 3
        return `chocolate quente R$ ${preco.toFixed(2)}`
        break
    case 200: 
        preco = 4
        return `hamburguer R$ ${preco.toFixed(2)}`
        break
    case 300: 
        preco = 5.5
        return `cachorrao R$ ${preco.toFixed(2)}`
        break
    case 400: 
        preco = 7.5
        return `bauru R$ ${preco.toFixed(2)}`
        break
    case 500: 
        preco = 3.5
        return `refrigerante R$ ${preco.toFixed(2)}`
        break
    case 600:
        preco = 2.8
        return `suco R$ ${preco.toFixed(2)}`
        break                                            
    default:
        return 'produto nao existe'                                                  
    } 
}
console.log(produtos(200))
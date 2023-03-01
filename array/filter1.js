//uma constante, um array com varios objetos
const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad pro', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false }
]
//callback com uma logica que retornar verdeiro ou falso, quando verdadeiro ele entra na seleçao quando falso não 
const fragil = function (elementofragil) {
    return elementofragil.fragil 
}
const caro = function (elementoPreco) {
    return elementoPreco.preco > 2000
}

//filtrandro dados 
console.log(produtos.filter(caro).filter(fragil))





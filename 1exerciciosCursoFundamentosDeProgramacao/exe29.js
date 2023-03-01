/**Crie uma função que recebe um array de números e retorna o segundo maior números presente  */


function retornarSegundoMaior (arrayNumeros) {
    const maiorNumero = Math.max(...arrayNumeros)
    arrayNumeros = arrayNumeros.filter(function (elemento){
    return elemento != maiorNumero
})
    const segundoMaior = Math.max(...arrayNumeros)
    return segundoMaior
}

console.log(retornarSegundoMaior([1,2,3,4,5,6]))
// simulando o funcionamento forEach(nome, índice, array)
//para acessar um array dentro de uma função que pertence ao prototype utiliza a variável this

//note que na função callback utilizada no forEach utiliza 3 parâmetros o nome do elemento, o índice do elemento, e o array
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) 

    }
}

const aprovados = ['ana', 'ro', 'ju', 'na']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}-) ${nome}`)
})


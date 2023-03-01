console.log(typeof Array, typeof new Array, typeof [])

//forma não tão recomendada de se criar um array
let aprovados = new Array()
console.log(aprovados)

// forma recomendada de se criar um array
aprovados = ['rodrigo', 'bia', 'ana']

//array é uma estrutura indexada, a forma de acessar os atributos de um array é através de um índice    
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

// nomeDoArray.pop()  remover o último elemento de um array 
aprovados.pop()
console.log(aprovados)

// nomeDoArray.shift() remove o primeiro elemento de um array e modifica a ordem do array
aprovados.shift()
console.log(aprovados)

//para add novo elemento dentro de um array ou substituir um elemento apartir do índice 
aprovados[3] = 'paulo'

//para add um novo elemento na última posição do array 
aprovados.push('jaka', 'joao') 

console.log(aprovados[3])
console.log(aprovados[4])
console.log(aprovados[5])

// nomeDoArray.length mostra o tamanho do array 
console.log(aprovados.length)

aprovados[9] = 'roro'
console.log(aprovados.length)

// note que o índice 7 existe, mas não foi definido 
console.log(aprovados[7] === undefined)
console.log(aprovados)

// nomeDoArray.sort() modifica o array original colocando na ordem 
aprovados.sort()
console.log(aprovados)

// para excluir um item e nao modifica a organização do array 
delete aprovados[1]

console.log(aprovados)

// nomeDoArray.splice(apartirDoIncice, quantidadeApagados, 'novosElemento' ) serve para adicinar ou remover elementos de um array
aprovados.splice(2, 0, 'novo1', 'novo2' )
console.log(aprovados)

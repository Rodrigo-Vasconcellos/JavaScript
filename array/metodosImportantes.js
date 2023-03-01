// quando se cria um array em uma constante, isso quer dizer que não é possível atribuir mais nada para constante, mas o conteúdo do array continua passível de modificações 
const pilotos = ['rodrigo', 'jaka', 'joão', 'jojo']

//metodo pop()  ele remove o último elemento do array
pilotos.pop()
console.log(pilotos)


// metodo push() ele add um elemento na última posição do array
pilotos.push('novo1')
console.log(pilotos)

//metodo shift() ele remove o primeiro elemento do array 
pilotos.shift()
console.log(pilotos)

// metodo unshift() ele add na primeira posição do array 
pilotos.unshift('rarara')
console.log(pilotos)

//metodo slice()  ele retorna um novo array apartir do indice escolido
const algunsPilotos1 = pilotos.slice(1)
console.log(algunsPilotos1)
// repare que este novo array inicia o índice 0 e termina no índice 2 mas sem incluir o índice 2 
const algunsPilotos2 = pilotos.slice(0, 2)
console.log(algunsPilotos2)
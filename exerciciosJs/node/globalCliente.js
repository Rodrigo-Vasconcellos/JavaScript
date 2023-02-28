const { nome } = require('./exportar')

//note que require() não foi atribuído a ninguém, mas agora as variáveis global pode ser utilizada 
require('./global')

console.log(minhaApp.saudacao())
console.log(minhaApp.nome)

//mesmo importando a variável de outro lugar vc pode modificá-la 
minhaApp.nome = 'rodrigo'
console.log(minhaApp.nome)
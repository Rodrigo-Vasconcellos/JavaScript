// retorna um objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// esses parentes no final é para retornar uma função 
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//note que eu exportei um objeto do node e ele faz cashs desse objeto
//note que foi retornado um objeto, contadorA = contadorB  e quando é colocado um incremento no contadorA ele incrementa o contadorB automaticamente
 
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//nesse caso foi novas instâncias criadas a partir de uma função fectori
//note que pelo fato de retornar uma função, contadorC = contadorD e quando é colocado um incremento no contadorC não incrementa o contadorD 

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor )
function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto 
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'anômino'
MeuObjeto.prototype.falar = function() { console.log(`oi esse obj está anônimo meu nome é ${this.nome}`)}

obj1.falar()
console.log(obj1.nome)

obj2.nome = 'rute'
obj2.falar = function () { console.log(`oi esse obj tem dodo seu nome é ${this.nome}`)}
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'rodrigo'
obj3.falar()

//resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
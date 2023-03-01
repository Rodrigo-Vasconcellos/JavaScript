// função em JS é First-Class object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

//armazenar em uma variável
const fun2 = function () {}

// armazenar em um array
const arrey = [function (a, b) { return a + b}, fun1, fun2]

console.log(arrey[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa!'}

console.log(obj.falar())

// Passar função como parametro 
function run(fun) {
    fun()
}

run(function () { console.log('executando...') })

// um função pode retornar/conter um função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(1, 2)(3)

const aMaisB = soma(1, 2)
aMaisB(3)

















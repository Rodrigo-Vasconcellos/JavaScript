//let e const

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//template string   

const produto = 'ipod'
console.log(`o produto ${produto}
é muito caro!!!`)

//destructuring
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x,, y] = [1, 2, 3]
console.log(x, y)

const {idade, nome } = { nome: 'ana', idade: 9}
console.log(idade, nome)
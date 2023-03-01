console.log(soma(3, 4))

// funcao declaration        Ela pode ser declarada depois do código 
function soma(x, y) {
    return x + y
}

// funcao expression        Tem que ser declarado antes do código 
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))


// named funcion expression       Tem que ser declarado antes do código 
const mult = function mult (x, y) {
    return x * y
}
console.log(sub(3, 4))
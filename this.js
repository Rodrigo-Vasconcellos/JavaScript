//this fora de uma função aponta para module.exports

console.log(this === module.exports)
console.log(this === exports)


//this dentro de uma função apota para global
function logThis() {
    console.log('dentro da função...')
    console.log(this === global)
}

logThis()
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // teturn implícito
console.log(dobro(Math.PI))


let ola = function () {
    return 'olá'
}

ola = () => 'olá'
ola = _ => 'olá'
console.log(ola())
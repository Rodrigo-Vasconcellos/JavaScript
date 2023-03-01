const  random = require("lodash")

function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        resolve(random(min, max))
    })
}

gerarNumerosEntre(2, 1)
    .then(numero => numero * 10)
    .then(numeroX10 => `o numero gerado foi ${numeroX10}`)
    .then(console.log)
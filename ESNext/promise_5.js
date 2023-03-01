const { reject } = require("lodash");

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando', 0.9)
    .then(v => `valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`erro especial: ${err}`)
    )
    .then(() => console.log('quase fim'))
    .catch(erro => console.log(`erro geral: ${erro}`))
    .then(() => console.log('fim'))
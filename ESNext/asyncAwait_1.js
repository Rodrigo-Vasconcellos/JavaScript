function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

/*esperarPor(2000)
    .then(() => console.log('executando um promise 1'))
    .then(esperarPor)
    .then(() => console.log('executando um promise 2'))
    .then(esperarPor)
*/

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarRapido() {
    return 20
}

async function executar() {
    let valor = await retornarRapido()

    await esperarPor(1500) 
    console.log(`executar 1 ${valor } `)

    await esperarPor(1500) 
    console.log(`executar 2 ${valor + 1} `)

    await esperarPor(1500) 
    console.log(`executar 3 ${valor + 2} `)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}


executarDeVerdade()



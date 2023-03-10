/*
setTimeout(function() {
    console.log('executando callback apos 2 segundos ')

    setTimeout(function() {
        console.log('executando callback apos + 2 segundos ')

        setTimeout(function() {
            console.log('executando callback apos + 2 segundos ')
        }, 2000)
    }, 2000)
}, 2000)
*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('executando um promise')
            resolve()
        }, tempo)
    })
}


esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
    


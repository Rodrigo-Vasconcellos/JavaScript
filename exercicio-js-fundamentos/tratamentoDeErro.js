function tratarErroLancado(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagen'
    throw { 
        nome: erro.name,
        msg: erro.menssage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCasel() + '!!!' )
    } catch (e) {
        tratarErroLancado(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'roberto'}
imprimirNomeGritado(obj)
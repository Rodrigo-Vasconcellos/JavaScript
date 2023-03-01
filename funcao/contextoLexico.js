const valor = 'global'

function minhafuncao() {
    console.log(valor)
}


//A função tem memória do local das suas origens    
//com isso ela utiliza variáveis que estão declaradas no mesmo escopo 
function exec() {
    const valor = 'local'
    minhafuncao()
    
}

exec()
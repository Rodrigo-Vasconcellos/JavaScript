/**Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidos.  */

function inverter (objeto) {
    let resposta = {}
    for(let key in objeto){
        resposta[objeto[key]] = key
    }
    return resposta
}
console.log(inverter({a: 1, b: 2, c: 3}))
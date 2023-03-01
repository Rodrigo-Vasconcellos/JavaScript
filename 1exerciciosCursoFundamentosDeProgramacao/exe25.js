/**A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar uma função para identificar palavras semelhantes.
Escreva  uma função que receba uma palavra no primeiro parâmetro e no segundo um array de palavras. A função devera filtrar as palavras do array que contem nelas a palavra do primeiro parâmetro.
 */

function buscarPalavrasSemelhantes (palavra, arrayPalavras) {
    return arrayPalavras.filter(function(elemento){ 
        return elemento.includes(palavra)
    })    
}

console.log(buscarPalavrasSemelhantes('rodri', ['rodrigo','je','rodri','rod', 'rodrigo1', 'rodrigo2']))
/**no terminal de comando usando o comando npm = intalar
 * digite npm lodash
 * com isso foi intalado uma pasta node_module e dentro dela uma pasta lodash 
 *  
 * a seguir eu atribua na constante _ o require('lodash') para importar uma pasta chamand lodash
 * a pasta lodash é um objeto com muitos conjuntos de jave a valores
 */


const _ = require('lodash')


// quando uso _.random()  quer dizer que o  modulo random é uma chave do objeto lodash

setInterval(() => console.log(_.random(5, 10)), 2000)


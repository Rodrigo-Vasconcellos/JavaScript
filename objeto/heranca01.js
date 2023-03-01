const ferrari = {
    modelo: 'f40',
    valMax: 324
}

const volvo = {
    modelo: 'v40',
    valMax: 200
}

// através do atributo __proto__ eu posso acessar o protótipo (objeto pai) 
console.log(ferrari.__proto__)
//__proto__ representa (aponta para) Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//o Object.prototype não aponta para outro protótipo mas sim aponta para null
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)


//sempre que estiver falando de protótipo de objeto a forma para acessar o atributo dentro do objeto é __proto__

//Objetc é uma função e toda função tem esse atributo prototype

//um objeto em javascript ele tem uma referência para o seu protótipo, e essa é a forma que javascript define herança. a partir da referência de um protótipo vc tem uma referência para outro objeto, e esse objeto tem atributo e comportamentos que podem ser acessados a partir do objeto filho, vc pode colocar um atributo que não existe no filho e ele vai procurar no protótipo pai não achou no pai vai procurar no avo e assim vai percorrendo a cadeia de protótipos até encontrar aquele determinado atributo 

//e a forma que vc tem de encontrar dentro de um objeto acessar o protótipo dele é a partir do atributo __proto__
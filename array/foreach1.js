// para percorrer um array utiliza-se o forEach

const aprovados = ['ana', 'aldo', 'rodrigo', 'paulo']

//nomeDoArray.forEach(function(elemento, índice))  dentro do forEach é passado uma função de call back que recebe 2 parâmetros(nome do elemento, índice do elemeto), que vai ser chamada para cada interação que for feita no array. ou seja, para cada novo elemento do array, vai chamar a call back passando o nome do elemento e seu índice correspondente  
aprovados.forEach(function(nome, indice ){
    console.log(`${indice + 1}-) ${nome}`)
    
})

//não é necessário utilizar o parâmetro índice 
//exemplo de forEach utilizando uma função de call back com um parâmetro (nome do elemento)
aprovados.forEach(function(nome){
    console.log(nome)
})

//exemplo de como usar uma função que está armazenada em uma constante junto com foreach
const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

//obs se for querer utilizar o parâmetro índice é obrigatório utilizar o parâmetro nome, pois o índice sempre é passado como segundo parâmetro 

// dentro do forEach tem um terceiro parâmetro que é o próprio array 
aprovados.forEach(function(nome, indice, array ){
    console.log(`${indice + 1}-) ${nome}`)
    console.log(array)
})
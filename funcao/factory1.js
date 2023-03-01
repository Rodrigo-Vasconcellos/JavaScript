function criarPessoa() {
    return {
        nome: 'a',
        idade: 1,
        logradouro: 'não tem '
    }
}

console.log(criarPessoa())





function criarPessoa1(nome, idade, logradouro) {
    return {
        nome,
        idade,
        logradouro
    }
}

console.log(criarPessoa1())
console.log(criarPessoa1('rodrigo', 33 ))
console.log(criarPessoa1('ana', 55, 'casa braca' ))

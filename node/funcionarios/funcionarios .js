const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = (elemento) =>  elemento.pais === 'China'
const mulheres = (elemento) => elemento.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
   return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual      
}

axios.get(url).then(response => {
   const funcinarios = response.data
 

    const menorSalarioFemininoChines = funcinarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(menorSalarioFemininoChines)
})    
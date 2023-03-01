// operador ... rest (juntar)  / spread(espalhar)
// usar o rest como parametros de função

//usar spread com objeto
const funcionario = {nome: 'rodrigo', salario: 12000.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'maria', 'gloria']
const grupoFinal = ['rita', ...grupoA, 'rodrigo']
console.log(grupoFinal)
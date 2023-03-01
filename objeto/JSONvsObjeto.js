// JSON é um formato textual 
//tranformando um objeto em JSON
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}

//note que a função não aparece pois o JSON é um formato de dados, não suporta augo executável 
console.log(JSON.stringify(obj))

//um objeto gerado apartir de um JSON
console.log(JSON.parse('{"a": "rodrigo", "b": true, "c": 3.89, "d": []}'))
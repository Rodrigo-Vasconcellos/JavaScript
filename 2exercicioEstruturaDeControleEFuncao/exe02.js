function tipoTriangulo (valor1, valor2, valor3) {
    if (valor1 === valor2 && valor1 === valor3)
        return 'equilátero'
    else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3)
        return 'isósceles' 
    else
        return 'escaleno'       
}

console.log(tipoTriangulo(3,2,2))
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in numeros) {
    if (x == 3) {
        break
    }
    console.log(`${x} = ${numeros[x]}`)
}

for (y in numeros) {
    if (y == 2){
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}

externo: for(a in numeros) {
    for (b in numeros) {
        if (a == 0 && b == 2) break externo
        console.log(`par = ${a},${b}`)
    }
}
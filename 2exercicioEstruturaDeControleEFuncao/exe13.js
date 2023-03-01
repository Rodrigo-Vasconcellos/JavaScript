function diaUtil (numeroDia) {
    switch(numeroDia) {
    case 1: 
        return false
        break
    case 2: case 3: case 4: case 5: case 6:
        return true
        break                                
    case 7:  
        return false
        break             
    default:
        return 'erro do usuario'                                                  
    } 
}
console.log(diaUtil(1))
console.log(diaUtil(2))
console.log(diaUtil(6))
console.log(diaUtil(7))
console.log(diaUtil(8))

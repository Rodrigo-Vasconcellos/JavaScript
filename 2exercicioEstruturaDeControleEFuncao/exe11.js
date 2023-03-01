
function anobissexto (ano) {
    return (( ano % 4 == 0  && ano % 100  != 0) || ano % 400 == 0)
        
}
console.log(anobissexto(2020))
console.log(anobissexto(2021))
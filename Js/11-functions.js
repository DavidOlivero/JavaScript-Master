'use strict'

// Función
// Es una caja que contiene código adentro que luego se puede llamar a lo largo del código
function calculator(number1, number2, show=false) {
    if (!show) {
        console.log('Suma: ' + (number1 + number2))
        console.log('Resta: ' + (number1 - number2))
        console.log('Producto: ' + (number1 * number2))
        console.log('Cociente: ' + (number1 / number2))    
    } else {
        document.write('Suma: ' + (number1 + number2))
        document.write('Resta: ' + (number1 - number2))
        document.write('Producto: ' + (number1 * number2))
        document.write('Cociente: ' + (number1 / number2))
    }
}


console.log(calculator(5, 10, true))

// Se puede llamar por medio de un bucle
for (let i = 1; i <= 10; i++) {
    console.log(i)
    calculator(i, 9)
}
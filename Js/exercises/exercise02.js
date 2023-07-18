'use strict'

// Mostrar por medio de un bucle while la suma y la media de los números introducidos por el
// usuario hasta que sean negativos o iguales que cero

let number1 = parseInt(prompt('Ingrese el primer número'))
let number2 = parseInt(prompt('Ingrese el segundo número'))

while (number1 > 0 && number2 > 0) {
    // Suma
    alert('La suma de ambos números es ' + number1 + number2)

    // Media
    alert('La media de ambos núeros es ' + (number1 + number2) / 2)

    // Pedir nuevos números
    number1 = parseInt(prompt('Ingrese el primer número'))
    number2 = parseInt(prompt('Ingrese el segundo número'))
}

// También se puede hacer de esta manera

let adition = 0;
let acount = 0;
let number = parseInt(prompt('Ingresa números hasta que ingreses uno negativo', 0))

do {
    if (isNaN(number)) {
        number = 0;
    } else if (number >= 0) {
        adition += number

        acount++
    }

    number = parseInt(prompt('Ingresa números hasta que ingreses uno negativo', 0))

} while (number > 0)

alert('La suma de los números que introdujiste es ' + adition)
alert('La media de todos esos números es de ' + (adition / acount))
'use strict'

/*
Calculadora
- Pidir dos números por pantalla
- Volver a pedir los números si estos no son correctos
- Mostrar en el cuerpo de la página, en una alerta, y por la consola el resultado de:
-- sumar, restar, multipicar y dividir los números
*/

let number1 = parseInt(prompt('Ingrese el primer número'))
let number2 = parseInt(prompt('Ingrese el segundo número'))

while (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
    alert('Los datos no son correctos inténtalo de nuevo')

    number1 = parseInt(prompt('Ingrese el primer número'))
    number2 = parseInt(prompt('Ingrese el segundo número'))
}

let result = 'La suma es: ' + (number1 + number2) + '\n' + 
             'La resta es: ' + (number1 -  number2) + '\n' +
             'La multiplicación es: ' + (number1 * number2) + '\n' + 
             'La división es: ' + (number1 / number2) + '\n'

let htmlResult = 'La suma es: ' + (number1 + number2) + '<br/>' + 
             'La resta es: ' + (number1 -  number2) + '<br/>' +
             'La multiplicación es: ' + (number1 * number2) + '<br/>' + 
             'La división es: ' + (number1 / number2) + '<br/>'


document.write(htmlResult)
alert(result)
console.log(result)
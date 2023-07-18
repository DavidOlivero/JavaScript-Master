'use strict'

// Mostrar todos los números que esén entre dos números introducidos por el usuario
let number1 = parseInt(prompt('Introdusca el primer número'))
let number2 = parseInt(prompt('Introdusca el segundo número'))

document.write('<h1>Los numeros que están entre ' +  number1 + ' y ' + number2 + ' son los siguientes:</h1>')
for (let i = (number1 + 1); i < number2; i++) {
    document.write('<ul><li>' + i + '</li></ul>')
}
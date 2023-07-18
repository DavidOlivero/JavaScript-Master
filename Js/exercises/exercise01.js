'use strict'

// Un programa que pida dos números y nos diga cuál es mayor cuál es menor y si son iguales
// Plus: si los datos no son números o son menores o iguales a cero nos vuelva a pedir los datos

// Pedir números y transfomarlos en entero
let number1 = parseInt(prompt('Ingrese el primer número'))
while (isNaN(number1) || number1 <= 0) {
    number1 = parseInt(prompt('El dato no es correcto inténtelo de nuevo'))
}

let number2 = parseInt(prompt('Ingrese el segundo número'))
while (isNaN(number2) || number2 <= 0) {
    number2 = parseInt(prompt('El dato no es correcto inténtelo de nuevo'))
}

// Evaluar cuál es el mayor y el menor o si son iguales
if (number1 > number2) {
    document.write('El numero ' + number1 + ' es el mayor y el número ' + number2 + ' es el menor')
} else if (number2 > number1) {
    document.write('El numero ' + number2 + ' es el mayor y el número ' + number1 + ' es el menor')
} else {
    document.write('Ambos números son iguales')
}
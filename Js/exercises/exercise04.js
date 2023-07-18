'use strict'

// Mostrar todos los números impares que hay entre dos números introducidos por el usuario
let number1 = parseInt(prompt('Ingrese el primer número'))
let number2 = parseInt(prompt('Ingrese el segundo número'))

let htmlCode = '<div class="continer"><div class="flex-continer">'

document.write('<h1>Estos son todos los números impares entre ' + number1 + ' y ' + number2 + '</h1>')
for (let i = (number1 + 1); i < number2; i++){
    if (i % 2 != 0) {
        htmlCode += '<strong><p>' + i + '</p></strong>'
    }
}

htmlCode += '</div></div>'
document.write(htmlCode)
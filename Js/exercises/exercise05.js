'use strict'

// Mostrar todos los números divisores de un número introducido por el usuario
let number = parseInt(prompt('Ingrese un número para saber todos sus divisores', 1))
let htmlCode = '<div class="continer"><div class="flex-continer">'

document.write('<h1>Estos son todos los números divisores de ' + number + '</h1>')
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        htmlCode += '<strong><p>' + i + '</p></strong>'
    }
}

htmlCode += '</div></div>'
document.write(htmlCode)
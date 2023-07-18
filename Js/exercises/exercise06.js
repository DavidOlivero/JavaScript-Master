'use strict'

/*
Que nos diga si un número es par o impar
1.) Tener la ventana prompt para introducir el número
2.) Volver a pedir el número si este no es válido
*/

let number = parseInt(prompt('Introduce un número para averirguar si es par o impar'))
let htmlCode = '<div class="box">'

document.write('<h1>¿Es el número ' + number + ' par?</h1>')
while (isNaN(number)) {
    number = parseInt(prompt('El dato no es válido inténtalo de nuevo'));
}

if (number % 2 == 0) {
    htmlCode += '<h2>SÍ</h2></div>'
} else {
    htmlCode += '<h2>NÓ</h2></div>'
}

document.write(htmlCode)
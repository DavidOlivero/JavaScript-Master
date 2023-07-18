'use strict'

// Todas las tablas de multiplicar del 1 al 10
let answer = confirm('Desea mostrar las tablas de multiplicar de todos los números')

if (answer) {
    let htmlNewCode = '<div class="flex">'

    document.write('<h1>Tablas de multiplicar del 1 al 10</h1>')    
    for (let i = 1; i <= 10; i++) {
        htmlNewCode += '<div class="continer">'

        for (let x = 1; x <= 10; x++) {
            htmlNewCode += '<strong><p>' + i + ' X ' + x + ' = ' + (i * x) + '</p></strong>'        
        }

        htmlNewCode += '</div>'
    }

    htmlNewCode += '</div>'
    document.write(htmlNewCode)
} else {
    // Tabla de multiplicar de un número introducido por el usuario
    let number = parseInt(prompt('Ingrese número para saber su tabla de multiplicar', 1))
    let htmlCode = '<div class="continer-i">'

    while (isNaN(number) || number <= 0) {
        number = parseInt(prompt('El dato no es válido inténtelo de nuevo'))
    }

    document.write('<h1>La tabla de multiplicar de ' + number + ' es:</h1>')
    for (let i = 1; i <= 10; i++) {
        let result = number * i
        htmlCode += '<strong><p> ' + number + ' X ' + i + ' = ' + result + '</p></strong>'
    }

    htmlCode += '</div>'
    document.write(htmlCode)
}
'use strict'

/*
1. Pedir 6 números por pantalla y guardarlos en un array
2. Mostrar todo el array en el body de la página y en la consola
3. Ordenar el array y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Buscar un valor introducido por el usuario e indicar si se encuentra en el array y su índice
*/

let numericalArray = []
// let numericalArray = new Array(6) -> De esta forma le indicamos que el array solo tendrá 
// 6 elementos

// I
for (let i = 0; i < 6; i++) {
    // Pedir el número
    let number = parseInt(prompt(`Ingrse el valor número ${(i + 1)} para agregarlo al array`))
    
    // Pedir valor de nuevo si ete no es correcto
    while (isNaN(number)) {
        number = parseInt(prompt('Dato erroneo inténtelo e nuevo'))
    }

    // Guardar el número en el array
    numericalArray.push(number)
}

// II
// Mostrar el body de la página
let htmlCode = '<ul>'
numericalArray.forEach(element => {
    htmlCode += `<li>${element}</li>`
})

htmlCode += '</ul>'
document.write(htmlCode)

// Mostrar en la consola
console.log(numericalArray)

// III
console.log(numericalArray.sort())

// IV
console.log(numericalArray.reverse())

// VI
console.log(numericalArray.length)

// VII
// Pedir valor al usuario
let value = parseInt(prompt('Ingrese el valor que de desea buscar en el array'))

while (isNaN(value)) {
    value = parseInt(prompt('Valor erroneo inténtelo de nuevo'))
}

let index = numericalArray.findIndex(number => number == value)

if (index != -1) {
    alert(`El valor se encuentra dentro del array en el índice ${index}`)
} else {
    alert('El valor no se ha encontrado en el array')
}
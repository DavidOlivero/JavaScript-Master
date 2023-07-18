'use strict'

// Arrays -> colección de datos
let names = ['David Oluvero', 'Juán Lopez', 'Pérez García']

// Se pueden definir arrays en forma de objeto
let languages = new Array('Js', 'C', 'Java', 'Python', 'HTML', 'CSS')

// let element = parseInt(prompt('¿Qué elemento del array quieres?'))

// if (element >= names.length) {
//     alert('El elemento seleccionado no existe')
// } else {
//     alert(names[element])
// }

// Mostrar todos los elementos del array
document.write('<h1>Lenguajes de programación más demandados del 2023</h1>')

let htmlCode = '<ol>'
// for (let i = 0; i < languages.length; i++) {
//     htmlCode += `<li>${languages[i]}</li>`
// }

// Puedo usar el método forEach que recibe un callback 
// languages.forEach((element, index, data) => { // El forEach devuelve al callback ele elemento
//     htmlCode += `<li>${element}</li>`         // y también opcionalmente el índice y elarray entero
//     console.log(index)
//     console.log(data)
// })

// Tambien puedo usar el forIn que recorre un array devolviendo su índice
// for (const key in languages) {
//     htmlCode += `<li>${languages[key]}</li>` 
// }

// Tambien podemos usar el forOf que devuelve cada uno de los elementos
for (const iterator of languages) {
    htmlCode += `<li>${iterator}</li>`
}

htmlCode += '</ol>'
document.write(htmlCode)

// Buscar dentro de un array
let languageFound = languages.find(language => {
    return language == 'Java'
})

// La anterior función se puede resumir de la siguiente forma
languageFound = languages.find(language => language == 'Java')

console.log(languageFound)

// Para mostrar el índice en que se encuentra se puede usar findIndex
languageFound = languages.findIndex(language => language == 'Java')

console.log(languageFound)

// Para hacer búsquedas con arrays numéricos puedo usar el método some
let prices = [20, 30 , 10, 90, 50]
languageFound = prices.some(price => price >= 20)

console.log(languageFound)
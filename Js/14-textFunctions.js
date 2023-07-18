'use strict'

// Transformación de strings
let number = 404
let text1 = '   Aprendiendo JavaScript para la web   '
let text2 = 'En un curso de UDEMY, es buén curso'

let dataText = number.toString() // Transforma la variable númerica en un string
console.log(dataText + ' es un: ' + typeof dataText)

dataText = text1.toUpperCase()
console.log(text1 + ' -> ' + dataText)

dataText = text1.toLowerCase()
console.log(text1 + ' -> ' + dataText)

// Saber la ongitud de un texto
let userName = 'David'
console.log(userName.length)

// Concatenar texto
let totalText = text1.concat(' ', text2)
console.log(totalText)

// Busqeudas en texto
let search = text2.indexOf('curso') // Muestra a partir de que caracter se encuentra la palabra
                                   // se puede usar la función search que hace lo mismo
let newSearch = text2.lastIndexOf('curso') // Muestra el último caracter en donde aparece
                                               // la palabra
console.log(search)
console.log(newSearch)

let advancedSearch = text2.match(/curso/g) // Muestra un array con toda la información de la búsqueda
                                         // se puede usar el //g para buscar todas las palabras
console.log(advancedSearch)

// Extraer texto
let substractText = text2[6]
substractText = text2.charAt(6) // Extrae un carácter en específico
console.log(substractText)

let initialWord = text1.startsWith('Aprendiendo') // Busca si el string inicia de esa forma
console.log(initialWord)

let endWord = text1.endsWith('web') // Busca si el string termina de esa forma
console.log(endWord)

let includeText = text1.includes('JavaScript') // Busca si el string está incluido dentro
console.log(includeText)

// Remplazar texto
let replaceText = text1.replace('JavaScript', 'Jquery')
console.log(replaceText)

// Cortar texto
let cutText = text1.slice(12) // Puedo indicarle hasta que posición quiere que extraiga
console.log(cutText)

// Puedo usar split para generar un array con las palabras separadas por un separador
let spaces = text1.split(' ')
console.log(spaces)

// Para quitar los espacios iniciales y finales de un string
let delateSpaces = text1.trim()
console.log(delateSpaces)
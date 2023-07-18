'use strict'

// Arrray multidimencinales -> Arrays con otros Arrays dentro
let category = ['Acción', 'Ciencia ficción', 'Aventura', 'Suspenso', 'Investigación']
let movies = ['El gran torino', 'Start war', 'Los piratas del Caribe', 'The call', 'Cheillon Homes']

let cine = [category, movies]
console.log(cine[1][1])

// Agregar elementos a los arrays
category.push('Fantasía')
movies.push('Ércules')

console.log(category)
console.log(movies)

let element = prompt('Ingrese películas [Q] para terminar')
while (element.toLowerCase() != 'q') {
    movies.push(element)
    element = prompt('Ingrese películas [Q] para terminar')
}

document.write('<h1>Tus películas favoritas</h1>')
document.write('<ol>')

movies.forEach(movie => {
    document.write(`<li>${movie}</li>`)
})

document.write('</ol>')

// Para eliminar el último elemento del array se usa el método pop()
// Para eliminar un elemento en concreto del array podemos usar el método splice que recibe el
// índice desde donde quiero borrar y cuantos índices quiero borrar a partir de allí.
let index = movies.indexOf('Batman')

if (index != -1) {
    movies.splice(index, 1)
    console.log(movies)
}

// Para convertit un array en un string separado por comas puedo usar el método join
let arrayToString = movies.join()
console.log(arrayToString)

// Para convertir texto en un array puedo usar split
let string = 'texto1, texto2, texto3'
let stringToArray = string.split(', ')
console.log(stringToArray)

// Para ordenar un array alafabéticamente podemos usar el método sort
let letters = ['D', 'A', 'B', 'E', 'C', 'F']
console.log(letters.sort())

// Para invertir el array se usa el método reverse
console.log(letters.reverse())
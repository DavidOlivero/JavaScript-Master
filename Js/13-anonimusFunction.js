'use strict'

//Funciones anónimas -> son aquellas que no tienen nombre sino que se guardan dentro de una variable
let movie = function (movie) {
    console.log('La película es: ' + movie)
}

// Ls callback son funciones anónimas que se ejecutan dentro de otra función
function sum(number1, number2, showMe, sumForTwo) {
    let result = number1 + number2
    showMe(result)
    sumForTwo(result)
}

sum(2, 5, function (result) {
    console.log('El resultado de la suma es: ' + result)
}, function (result) {
    console.log('El resultado por dos es: ' + (result * 2))
})

// Se puede hacer por medio de funciones de flecha
// Para un solo prámetro puedo usar los paréntesis o no
sum(2, 5, result => {
    console.log('El resultado de la suma es: ' + result)
}, result => {
    console.log('El resultado por dos es: ' + (result * 2))
})
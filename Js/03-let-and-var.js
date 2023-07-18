'use strict'

// var -> funciona de forma global
var number = 17
alert(number)

if (true) {
    number = 18
    alert(number)
}

alert(number)

// let -> funciona solo a nivel local de bloque
var text = 'Hola'
alert(text)

if (true) {
    let text = 'Chao'
    alert(text)
}

alert(text)
'use strict'

// Condicional if
var old1 = 32;
var old2 = 12;

if (old1 > old2) {
    console.log('La edad uno es mayor a la edad dos.')
} else {
    console.log('La edad uno es inferior.')
}

var userOld = 18
var user = 'David Olivero'

if (userOld >= 18) {
    console.log(user + ' tiene ' + userOld + ' de edad, es mayor de edad')
} else {
    console.log(user + ' tiene ' + userOld + ' años de edad, es menor de edad')
}

var year = 2028

if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log('El año termina en 8')
} else {
    console.log('Año no registrado')
}
'use strict'

// Uso del switch
var old = 18
var printed = ''

switch (old) {
    case 18:
        printed = 'Eres myor de edad'
        break;
    
    case 25:
        printed = 'Ya eres un adulto'
        break

    case 40:
        printed = 'Crisis de los cuarenta'
        break

    case 75:
        printed = 'Ya eres un anciano'
        break

    default:
        printed = 'Tu edad es neutral';
}

console.log(printed);
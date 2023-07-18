'use strict'

let user_name = prompt('Ingresa tu nombre')
let firmName = prompt('Ingresa tus apellidos')

let fullName = `
    <h2>Nombre: </h2>
    <strong><p>${user_name}</p></strong>
    <h2>Apellidos: </h2>
    <strong><p>${firmName}</p></strong>
`

document.write(fullName)
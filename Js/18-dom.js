'use strict'

// DOM -> document object model
let result = document.getElementById('mybox') // Para las clases es document.getElementsByClassName

// Se puede usar el método querySelector para seleccionar clases o ids como en css
result = document.querySelector('#mybox')

result.innerHTML = '¡TEXTO EN LA CAJA DESDE JAVASCRIPT!' // El innerHTML extrae el código que está 
                                                        // dentro de esa etiqueta
// console.log(result)

// Tambien puedo usar reglas de de css
let changeColor = color => {
    result.style.backgroundColor = color
}

let color = prompt('Ingrese código de color')
changeColor(color)

result.style.padding = '20px'
result.style.color = '#fff'
result.style.textAlign = 'center'
result.style.borderRadius = '20px'

// Puedo agregar clases a los elementos de html
result.className = 'my-class'

// Acceder a un elemento por su etiqueta
let allDivs = document.getElementsByTagName('div') // Devuelve un array con todos esos elementos
let content = allDivs[1].textContent // Extrae el texto del elemento

allDivs[1].innerHTML = 'Nuevo texto en esta caja'

console.log(allDivs[1])

// Crear elementos
let divs = document.getElementsByTagName('div')
for (const div of divs) {
    let text = document.createTextNode(div.innerHTML)
    let paragraph = document.createElement('p')
    paragraph.append(text)
    document.querySelector('#my-section').append(paragraph)
}

// Acceder a una clase del html
let redDivs = document.getElementsByClassName('red')
for (const element of redDivs) {
    element.style.backgroundColor = 'red'
    element.style.color = '#fff'
}

let yellowDiv = document.getElementsByClassName('yellow')
yellowDiv[0].style.backgroundColor = 'yellow'

console.log(yellowDiv)

// NOTA: El query selector solo seleccional el primer elemento con la característica a encontrar
// Para seleccionar todos los elementos existe el método querySelectorAll
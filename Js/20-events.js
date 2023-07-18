'use strict'

// Esperar a que toda la página cargue
window.addEventListener('load', () => {
    // EVENTOS: Acciones que se realizar al pasar algo dentro de la web
    let button = document.querySelector('#button')
    let body = document.getElementsByTagName('body')

    button.style.padding = '10px'
    button.style.borderRadius = '10px'

    let c = 0
    function changeColor() {
        let colors = ['black', 'white', 'yellow', 'green', 'brown', 'skyblue', 'purple']
        
        if (c == 0) {
            body[0].style.backgroundColor = colors[c]
            body[0].style.color = '#fff'
        } else {
            body[0].style.color = '#000'
            body[0].style.backgroundColor = colors[c]
        }
        
        if (c != (colors.length - 1)) {
            c++;
        } else {
            c = 0
        }
    }

    // Para hacer el código de HTML más limpio podemos ejecutar el evento desde JavaScript
    // Click
    button.addEventListener('click', () => {
        changeColor()
    })

    // Mouse over
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#ccc'
    })

    // Mouse out
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ddd'
    })

    // Evento para textos
    let inputArea = document.querySelector('#text')

    // Focus -> Cuando estoy dentro del input
    inputArea.addEventListener('focus', () => {
        inputArea.style.padding = '20px'
    })

    // Blur -> Cuando estoy fuera del input
    inputArea.addEventListener('blur', () => {
        inputArea.style.padding = '0'
    })

    // Keydown -> Cuando estoy presionado una tecla
    inputArea.addEventListener('keydown', (event) => {
        console.log('Estás presionando la tecla ' + String.fromCharCode(event.keyCode))
    })

    // Keypress -> Cuando presionas la tecla
    inputArea.addEventListener('keypress', (event) => {
        console.log('Precionaste la tecla ' + String.fromCharCode(event.keyCode))
    })

    // Keyup -> Cuando dejas de presionar la tecla
    inputArea.addEventListener('keyup', (event) => {
        console.log('Dejaste de precionar la tecla ' + String.fromCharCode(event.keyCode))
    })
}) // End load
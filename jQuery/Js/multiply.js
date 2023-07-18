'use strict'


window.addEventListener('load', () => {
    let form = document.querySelector('#form')
    let evaluateButton = document.querySelector('#next')
    let nextButton = document.querySelector('#other')
    let value = localStorage.getItem('table', 2)
    let evaluate = false

    console.log(value)

    if (value == null) {
        localStorage.setItem('table', 2)
    }

    
    nextButton.addEventListener('click', () => {
        let comprobate;

        for (let i = 1; i <= 10; i++) {
            let answer = document.querySelector('#input-' + i)
            let answerValue = answer.value

            if (answerValue.length == 0) {
                alert('Rellene todos los campos para continuar')
                comprobate = false

                break
            }
        }
        
        if (localStorage.getItem('table') < 10 && comprobate != false && evaluate == true) {
            let item = localStorage.getItem('table')
            item++
            localStorage.setItem('table', item)
            location.reload()
        } else if (comprobate != false && evaluate == true) {
            let result = confirm('A completado todas las tablas ¿Desea empezar de nuevo?')
            if (result == true) {
                localStorage.setItem('table', 2)
                location.reload()
            }
        } else if (evaluate == false && comprobate != false) {
            alert('Debe evaluar las respuestas')
        }
    })
    
    for (let i = 1; i <= 10; i++) {
        let itemContiner = document.createElement('div')
        itemContiner.className = 'question'

        let labelElement = document.createElement('label')
        let strongText = document.createElement('strong')

        let input = document.createElement('input')
        input.type = 'number'
        input.id = 'input-' + i

        if (i == 10) {
            input.className = 'diferent'
        }
        labelElement.innerHTML = localStorage.getItem('table') + ' X ' + i
        strongText.append(labelElement)
        itemContiner.append(strongText, input)
        form.append(itemContiner)
    }

    evaluateButton.addEventListener('click', () => {
        let answers = new Array(10)

        for (let i = 1; i <= 10; i++) {
            let answer = document.querySelector('#input-' + i)
            let answerValue = answer.value

            if (parseInt(answerValue) == localStorage.getItem('table') * i) {
                answer.disable = true
                answer.style.border = '3px solid #0AF007'
            } else {
                // answer.disabled = true
                answer.style.border = '3px solid #F11308'
            }
            answers.push(answerValue)
        }

        evaluate = true
    })
})
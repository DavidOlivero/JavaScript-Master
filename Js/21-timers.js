'use strict'

window.addEventListener('load', () => {
    let startChangeColor = () => {
        // Timers -> temporizadores para manejar el tiempo

        // Timer
        let c = 0
        let body = document.getElementsByTagName('body')
        let time = setInterval(() => {
            let colors = ['black', 'white', 'yellow', 'green', 'brown', 'skyblue', 'purple']

            if (c != (colors.length - 1)) {
                if (c == 0) {
                    body[0].style.backgroundColor = colors[c]
                    body[0].style.color = '#fff'
                } else {
                    body[0].style.color = '#000'
                    body[0].style.backgroundColor = colors[c]
                }
                c++
            } else {
                c = 0
            }
        }, 500) // Si se quiere que se ejecute una sola vez se usa la función setTimeOut

        return time
    }

    let stopChangeColor = (time) => {
        clearInterval(time)
    }

    let time;
    
    let startButton = document.querySelector('#start')
    startButton.addEventListener('click', () => {
        time = startChangeColor()
    })

    let stopButton = document.querySelector('#stop')
        stopButton.addEventListener('click', () => {
        stopChangeColor(time)
    })
})
'use strict'

$(document).ready(() => {
    let box = $('#box').show()
    let showButton = $('#show').hide()

    $('#show').click(function () {
        $(showButton).hide()
        box.fadeTo('slow', 1) // show, hide, fadeIn, fadeOut, fadeTo, slideDown, slideOut, toggle, fadeTogle, slideToggle 
                             // -> fast normal, slow, 1, 0
        $("#hide").show()
    })

    // Podemos meter funciones de callBack a los efectos
    $('#hide').click(function () {
        $(this).hide()
        box.fadeTo('slow', 0, () => {
            console.log('El cartel se ha ocultado')
        })
        $(showButton).show()
    })

    $('#animate').click(function () {
        box.animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow')
        .animate({
            borderRadius: '100px',
            marginTop: '80px'
        }, 'slow')
    })
})
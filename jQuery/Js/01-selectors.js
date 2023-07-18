'use strict'

$(document).ready(() => {
    // $('#text').click(() => {
    //     alert('Se ha dado click')
    //     $(this).css('border', '3px dashed #000')
    // })

    // NOTA: Al usar el this en las funciones en flecha este hace referencia al elemento padre porque aplica el
    // bind(this) si se quiere hacer referencia al contexto actual se debe usar el function

    let pElement = $('p').css('cursor', 'pointer')
    
    $(pElement).click(function () {
        let that = $(this)

        if (!that.hasClass('border')) {
            $(this).addClass('border')
        } else {
            that.removeClass('border')
        }
    })

    // $('.border').click(function () {
    //     console.log(this)
    //     // hasClass
    //     $(this).removeClass('border')
    //     // that.addClass('unborder')
    // })

    // Selectores de atributos
    $('[title="Google"]').css('background-color', '#00FF64')
    $('[title="Facebook"]').css('background-color', '#0C5CFB')

    // Selectores de varios elementos
    $('p, a').css('margin-top', '20px')

    // Para buscar elementos dentro del dom usamos find
    let searched = $('#box').find('.highlighted')
    console.log(searched)

    // Para salir de un elemto y dirigirnos al padre usamos parent
    let element = $('#box .highlighted').eq(0).parent().parent().parent().find('[title="Google"]')
    console.log(element)
})
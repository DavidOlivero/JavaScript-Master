'use strict'

$(document).ready(() => {
    // let aElement = $('a')
    loadLinks()

    // Agregar nuevos elementos
    $('#add-button')
        .removeAttr('disabled')
        .click(() => {
            // Para agregar código html se usa html pero esto machaca lo que ya estaba adentro
            // Para agregar elementos a los que ya estaban se usa append o prepend para agregarlo antes
            // Si lo quero fuera o antes del elemento seleccionado uso before
            $('#menu').prepend('<li><a href="' + $('#add-link').val() + '"></li>')
            loadLinks()
        })
    
    // Saber cuantos elementos de un tipo hay
    console.log(aElement.length)
})

let loadLinks = () => {
        // Recorrer todos los elementos de un tipo
        $('a').each(function (index) {
        let that = $(this)

        console.log(index)
        console.log($(that))

        // Extraer el href que tiene dentro
        let link = that.attr("href")
        that.attr('target', '_blank')
        that.text(link)
    })
}
'use strict'

$(document).ready(() => {
    let element = $('.element')
    let list = $('.ul-selectable')

    // Mover elemento por la verntana
    element.draggable()

    // Redimencionar los elementos
    element.resizable()

    // Elementos seleccionables
    // list.selectable()

    // Crar una lista ordenable
    list.sortable({
        update: (event, ui) => {
            console.log('Ha cambiado la lista')
            console.log(event, ui)
        }
    })

    // Drop
    $('#droppable-element').draggable()
    $('#area').droppable({
        drop: function () {
            $(this).css('background-color', '#454545')
        }
    })

    // Efectos
    $('#show').click(function () {
        $('#efects-box').toggle('shake') // toggle('scale') // toggle('puff') // toggle('drop') // toggle('slide') // toggle('sblind') // toggle('explode') // effect('explode') // toggle('fade')
    })

    // Tooltip
    $(document).tooltip()

    // Dialog
    $('#dialog-launch').click(() => {
        $('#dialog').dialog()
    })

    // DatePicker
    $('#calendar').datepicker()

    // Tabs
    $('#tabs').tabs()
})
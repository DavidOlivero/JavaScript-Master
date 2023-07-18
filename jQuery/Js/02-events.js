'use strict'


$(document).ready(() => {
    let box = $('#box')

    // MouseOever and mouseOut
    // $(box).mouseover(function () {
    //     $(this).css('background-color', 'red')
    // })

    // $(box).mouseout(function () {
    //     $(this).css('background-color', 'yellow')
    // })

    // Hover
    box.hover(function () {
        $(this).css('background-color', 'red')
    }, function () {
        $(this).css('background-color', 'yellow')
    })

    // Click and double click
    box.click(function () {
        $(this).css('background-color', 'brown')
    })

    box.dblclick(function () {
        $(this).css('background-color', 'orange')
    })

    // Focus and blur
    let input = $('#name')
    let data = $('#data')

    input.focus(function () {
        $(this).css('border', '3px solid skyblue')
    })

    input.blur(function () {
        $(this).css('border', 'none')
        data.text($(this).val()).show() // Muestra el elemento -> solo funciona con display
    })

    // MouseDown and mouseUp
    data.mousedown(function () {
        $(this).css('border-color', '#ccc')
    })

    data.mouseup(function () {
        $(this).css('border-color', '#000')
    })

    // MouseMove
    $(document).mousemove(function () {
        // console.log(event.clientX)
        // console.log(event.clientY)
        $('body').css('cursor', 'none')
        $('#movable').css('left', event.clientX)
                     .css('top', event.clientY)
    })
})
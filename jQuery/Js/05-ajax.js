'use strict'

$(document).ready(() => {
    /**
     * Load -> cargar todo el html de una página
     * $('#data').load('https://reqres.in/')
     */

    // Get -> Hacer peticiones
    $.get('https://reqres.in/api/users', {page: 2}, (response) => {
        response.data.forEach((element) => {
            $('#data').append(`<strong><p>${element.first_name} ${element.last_name}</p></strong>`)
        });
    })

    // Post -> Crear nuevos elementos
    let user = {
        first_name: 'David',
        last_name: 'Olivero De La Hoz'
    }

    $.post('https://reqres.in/api/users', user, (response) => {
        console.log(response)
    })

    // Para el formulario
    $('form').submit(function (event) {
        // let first_name = $('#first-name').val()
        // let last_name = $('#last-name').val()
        // let web_site = $('#web-site').val()
        // let newUser

        // try {
        //     if (web_site.length > 0) {
        //         newUser = {
        //             first_name: first_name,
        //             last_name: last_name,
        //             web_site: web_site
        //         }
        //     } else {
        //         newUser = {
        //             first_name: first_name,
        //             last_name: last_name
        //         }
        //     }

        // } catch (error) {
        //     console.log('Imposible guardar')
        // }

        // $.post('https://reqres.in/api/users', newUser, (response) => console.log(response)) // -> Forma 1

        event.preventDefault() // Para que no se recargue la página
        
        let newUser = {
            first_name: $('input[name="first-name"]').val(),
            last_name: $('input[name="last-name"]').val(),
            web_site: $('input[name="web-site"]').val()
        }

        // $.post($(this).attr('action'), newUser, response => console.log(response)).done(() => {
        //     alert('Usuario registrado correctamente') // Se ejecuta cuando termina
        // })

        // return false // Segunda forma

        $.ajax({
            type: 'POST',
            // dataType: 'json',
            // contentType: 'aplication/json',
            url: $(this).attr('action'),
            data: newUser,
            beforeSend: () => console.log('Enviando usuario'),
            success: response => console.log(response),
            error: () => console.log('Imposible agregar el usuario'),
            timeout: '2000' // Cuanto va a tardar
        })
    })
})
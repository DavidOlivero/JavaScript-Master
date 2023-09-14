'use strict'

import { theme, credentials } from "./localStorageMnagement.js";
import { changeThemeFromButtons } from "./themesManagement.js";

$(document).ready(() => {
    // Create the sider
    $('.galery').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
    });

    // Set theme
    if (!theme) {
        localStorage.setItem("Theme", "green")
        theme = localStorage.getItem("Theme")
    }

    // Buttton for scroll to up
    $("#to-up").click(() => {
        $("html, body").animate({
            scrollTop: 0
        }, 500)
    })

    // Faalse login
    $("form").submit(function (e) {
        e.preventDefault()
        let sidebar = $("#sidebar")
        
        const data = Object.fromEntries(
            new FormData(e.target)
        )

        $(this).children("input").not("input[type='submit']").each(function () {
            $(this).val("")
        })

        let evaluate = false
        for (const property in data) {
            evaluate = data[property] === credentials[property]

            if (!evaluate) break
        }

        if (evaluate) {
            sidebar.children("h4, form").remove()
            sidebar.append(`<h3>Bienvenido ${data.name}</h3>`)
        }
    })

    // Change themes from buttons
    changeThemeFromButtons(theme)
})
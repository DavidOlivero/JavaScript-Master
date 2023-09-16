$(document).ready(() => {
    setInterval(() => {
        let time = moment().format('hh:mm:ss')
        $("#clock div").html(`<h2>${time}</h2>`)
    }, 1000)
})
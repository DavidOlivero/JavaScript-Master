'use strict'

// BOM -> browser object model: Son todos aquellos elementos que nos proporciona el navegador

// Mostrar la anchura y altura de la ventana
function getWindowSize() {
    console.log('Anchura de la ventana: ' + window.innerWidth)
    console.log('Altura de la ventana: ' + window.innerHeight)
}
getWindowSize()

function getScreenSize() {
    console.log('Anchura de la pantalla: ' + screen.width)
    console.log('Altura de la pantalla: ' + screen.height)
}
getScreenSize()

console.log(window.location) // Mostra todo acerca de locación actual
console.log(window.location.href) // Solo la url

function redirect(url) {
    window.location.href = url
}

function openWindow(url) {
    window.open(url, '', 'width=400, height=400') // Puedo especificar el tamaño
}
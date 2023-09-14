import { changeThemeFromButtons, changeThemeFromSlider } from "./themesManagement.js";

// Change theme with slider
$(".bx-controls-direction a").click(changeThemeFromSlider)
$(document).on("click", ".bx-pager-item a", changeThemeFromSlider)


// Change theme with buttons
$("#to-green").click(() => {
    changeThemeFromButtons("green")
    localStorage.setItem("Theme", "green")
})

$("#to-blue").click(() => {
    changeThemeFromButtons("blue")
    localStorage.setItem("Theme", "blue")
})
$("#to-red").click(() => {
    changeThemeFromButtons("red")
    localStorage.setItem("Theme", "red")
})
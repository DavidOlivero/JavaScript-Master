export const changeThemeFromSlider = () => {
    const imgOption = $(".img-option")

    imgOption.each(async function () {
        const element = $(this)

        let evaluate = await new Promise((resolve, _rejex) => {
            setTimeout(() => resolve(element.css("display") === "block"), 650)
        })

        if (evaluate) {
            const id = element.attr("id")
            $("#theme").attr("href", `Styles/${id}.css`)
        }
    })
}

export const changeThemeFromButtons = (theme) => {
    $("#theme").attr("href", `Styles/${theme}.css`)
}
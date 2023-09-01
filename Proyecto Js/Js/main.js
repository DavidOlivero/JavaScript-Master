'use strict'

let posts = JSON.parse(localStorage.getItem("Posts")) || []
if (posts.length === 0) {
    let defaultPost = [
        {
            title: "Título del artículo",
            date: moment().format("DD/MM/YYYY"),
            author: "Por David Olivero",
            from: "Corozal Sucre, Colombia",
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae molestias 
            veritatis numquam dolor impedit officiis, suscipit a reprehenderit, culpa laboriosam 
            voluptatum non corrupti aut aliquam mollitia iste. Facilis ex possimus suscipit ullam 
            earum laboriosam nihil nulla, neque, eos, molestias autem repellendus deleniti. Facere 
            libero consequatur, fugit vitae obcaecati, necessitatibus dolorum quasi quia aliquid 
            assumenda omnis odit culpa adipisci reprehenderit accusantium, fugiat iste mollitia. 
            Deleniti, alias voluptas? Illo fuga libero repudiandae nostrum. Harum ut quibusdam eaque 
            pariatur maiores. Et ipsa sequi quis, quod totam nostrum illum neque doloribus, ipsam natus 
            voluptatem consequuntur impedit corrupti possimus accusamus recusandae perferendis voluptate 
            nulla!`
        },

        {
            title: "Título del artículo",
            date: moment().format("DD/MM/YYYY"),
            author: "Por David Olivero",
            from: "Corozal Sucre, Colombia",
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae molestias 
            veritatis numquam dolor impedit officiis, suscipit a reprehenderit, culpa laboriosam 
            voluptatum non corrupti aut aliquam mollitia iste. Facilis ex possimus suscipit ullam 
            earum laboriosam nihil nulla, neque, eos, molestias autem repellendus deleniti. Facere 
            libero consequatur, fugit vitae obcaecati, necessitatibus dolorum quasi quia aliquid 
            assumenda omnis odit culpa adipisci reprehenderit accusantium, fugiat iste mollitia. 
            Deleniti, alias voluptas? Illo fuga libero repudiandae nostrum. Harum ut quibusdam eaque 
            pariatur maiores. Et ipsa sequi quis, quod totam nostrum illum neque doloribus, ipsam natus 
            voluptatem consequuntur impedit corrupti possimus accusamus recusandae perferendis voluptate 
            nulla!`
        },

        {
            title: "Título del artículo",
            date: moment().format("DD/MM/YYYY"),
            author: "Por David Olivero",
            from: "Corozal Sucre, Colombia",
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae molestias 
            veritatis numquam dolor impedit officiis, suscipit a reprehenderit, culpa laboriosam 
            voluptatum non corrupti aut aliquam mollitia iste. Facilis ex possimus suscipit ullam 
            earum laboriosam nihil nulla, neque, eos, molestias autem repellendus deleniti. Facere 
            libero consequatur, fugit vitae obcaecati, necessitatibus dolorum quasi quia aliquid 
            assumenda omnis odit culpa adipisci reprehenderit accusantium, fugiat iste mollitia. 
            Deleniti, alias voluptas? Illo fuga libero repudiandae nostrum. Harum ut quibusdam eaque 
            pariatur maiores. Et ipsa sequi quis, quod totam nostrum illum neque doloribus, ipsam natus 
            voluptatem consequuntur impedit corrupti possimus accusamus recusandae perferendis voluptate 
            nulla!`
        },

        {
            title: "Título del artículo",
            date: moment().format("DD/MM/YYYY"),
            author: "Por David Olivero",
            from: "Corozal Sucre, Colombia",
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae molestias 
            veritatis numquam dolor impedit officiis, suscipit a reprehenderit, culpa laboriosam 
            voluptatum non corrupti aut aliquam mollitia iste. Facilis ex possimus suscipit ullam 
            earum laboriosam nihil nulla, neque, eos, molestias autem repellendus deleniti. Facere 
            libero consequatur, fugit vitae obcaecati, necessitatibus dolorum quasi quia aliquid 
            assumenda omnis odit culpa adipisci reprehenderit accusantium, fugiat iste mollitia. 
            Deleniti, alias voluptas? Illo fuga libero repudiandae nostrum. Harum ut quibusdam eaque 
            pariatur maiores. Et ipsa sequi quis, quod totam nostrum illum neque doloribus, ipsam natus 
            voluptatem consequuntur impedit corrupti possimus accusamus recusandae perferendis voluptate 
            nulla!`
        },

        {
            title: "Título del artículo",
            date: moment().format("DD/MM/YYYY"),
            author: "Por David Olivero",
            from: "Corozal Sucre, Colombia",
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae molestias 
            veritatis numquam dolor impedit officiis, suscipit a reprehenderit, culpa laboriosam 
            voluptatum non corrupti aut aliquam mollitia iste. Facilis ex possimus suscipit ullam 
            earum laboriosam nihil nulla, neque, eos, molestias autem repellendus deleniti. Facere 
            libero consequatur, fugit vitae obcaecati, necessitatibus dolorum quasi quia aliquid 
            assumenda omnis odit culpa adipisci reprehenderit accusantium, fugiat iste mollitia. 
            Deleniti, alias voluptas? Illo fuga libero repudiandae nostrum. Harum ut quibusdam eaque 
            pariatur maiores. Et ipsa sequi quis, quod totam nostrum illum neque doloribus, ipsam natus 
            voluptatem consequuntur impedit corrupti possimus accusamus recusandae perferendis voluptate 
            nulla!`
        },

        {
            title: "Título del artículo",
            date: moment().format("DD/MM/YYYY"),
            author: "Por David Olivero",
            from: "Corozal Sucre, Colombia",
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia recusandae molestias 
            veritatis numquam dolor impedit officiis, suscipit a reprehenderit, culpa laboriosam 
            voluptatum non corrupti aut aliquam mollitia iste. Facilis ex possimus suscipit ullam 
            earum laboriosam nihil nulla, neque, eos, molestias autem repellendus deleniti. Facere 
            libero consequatur, fugit vitae obcaecati, necessitatibus dolorum quasi quia aliquid 
            assumenda omnis odit culpa adipisci reprehenderit accusantium, fugiat iste mollitia. 
            Deleniti, alias voluptas? Illo fuga libero repudiandae nostrum. Harum ut quibusdam eaque 
            pariatur maiores. Et ipsa sequi quis, quod totam nostrum illum neque doloribus, ipsam natus 
            voluptatem consequuntur impedit corrupti possimus accusamus recusandae perferendis voluptate 
            nulla!`
        }
    ]

    localStorage.setItem("Posts", JSON.stringify(defaultPost))
    posts = JSON.parse(localStorage.getItem("Posts"))
}

const renderPosts = () => {
    const postsContiner = $("#posts")
    posts.forEach(({ title, date, author, from, body }) => {
        postsContiner.append(`
            <article class="post">
                <div id="post-header">
                    <div>
                        <h2>${title}</h2>
                        <span>${date} ${author}, ${from}</span>
                    </div>
                    <button>92 Comentarios</button>
                </div>
                    <div id="info"><p>${body}</p></div>
                </div>
                <a href="">Leer más >></a>
            </article>
        `)
    });
}

const changeThemeFromSlider = () => {
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

const changeThemeFromButtons = (theme) => {
    $("#theme").attr("href", `Styles/${theme}.css`)
}

$(document).ready(() => {
    // Create the sider
    $('.galery').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
    });

    // Change theme with slider
    $(".bx-controls-direction a").click(changeThemeFromSlider)
    $(document).on("click", ".bx-pager-item a", changeThemeFromSlider)

    // Change theme with buttons
    $("#to-green").click(() => changeThemeFromButtons("green"))
    $("#to-blue").click(() => changeThemeFromButtons("blue"))
    $("#to-red").click(() => changeThemeFromButtons("red"))

    // Show posts
    renderPosts()
})
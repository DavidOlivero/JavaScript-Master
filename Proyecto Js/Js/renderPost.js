import { posts } from "./localStorageMnagement.js";

$(document).ready(() => {
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
})
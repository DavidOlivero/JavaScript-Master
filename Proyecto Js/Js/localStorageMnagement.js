export let posts = JSON.parse(localStorage.getItem("Posts")) || []
export let theme = localStorage.getItem("Theme") || ""
export let credentials = JSON.parse(localStorage.getItem("Credentials")) || {}

if (Object.keys(credentials).length === 0) {
    credentials = {
        name : "David",
        email: "example@gmail.com",
        password: "123456"
    }
    
    localStorage.setItem("Credentials", JSON.stringify(credentials))
}

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
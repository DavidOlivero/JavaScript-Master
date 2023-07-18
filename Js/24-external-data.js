'use strict'

// Fetch(ajax) y peticiones a servicios / apis rest
let usersList = []

window.addEventListener('load', () => {
    let allUserscontiner = document.querySelector('#all-users')
    let singleUserContiner = document.querySelector('#single-user')
    let allUsersElementContiner = document.querySelector('#elements')
    let singleUserElementContiner = document.querySelector('#element')
    let userHeader = document.querySelector('#header')

    allUserscontiner.style.display = 'none'
    singleUserContiner.style.display = 'none'

    let form = document.querySelector('#form')
    let idCampus = document.querySelector('#id')

    let usersButton = document.querySelector('#users')
    let userButton = document.querySelector('#user')

    usersButton.addEventListener('click', () => {
        allUserscontiner.style.display = 'block'
        singleUserContiner.style.display = 'none'
        
        getUsers()
            .then(data => data.json()) // El método then recoje los datos de la promesa
            .then(users => {
                usersList = users
                showUsers(usersList)
            })
    })

    userButton.addEventListener('click', () => {
        allUserscontiner.style.display = 'none'
        singleUserContiner.style.display = 'block'
        let id = 2
        
        form.addEventListener('submit', () => {
            id = idCampus.value
            getUser(id)
                .then(data => data.json())
                .then(user => {
                    showUser(user, id) 
                    return getInfo() // Devuelve una promesa
                })
                .then(data => console.log(data))
                // Para capturar errores se usa el catch
                .catch(error => {
                    console.log(error)
                })
        })
    })

    function getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users') // Promesas
    }

    function getUser(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    }

    function showUsers(data) {
        // Podría usar el método map que hace lo mismo que el forEach
        data.map((user_name, i) => {
            let name = document.createElement('h2')
            name.innerHTML = `${i}.) ${user_name.name}`
            allUsersElementContiner.append(name)
        });
    }

    function showUser(user, id) {
        userHeader.innerHTML = 'Usuario con identificador número ' + id
        let name = document.createElement('h2')
        name.innerHTML = user.name
        singleUserElementContiner.append(name)
    }

    function getInfo() {
        // Podemos crear nuestras propieas promesas
        let teacher = {
            name: 'David',
            lastNames: 'Olivero De La Hoz',
            email: 'daniolidavid32@gmail.com'
        }

        return new Promise((resolve, reject) => {
            let teacherString = JSON.stringify(teacher)

            if (typeof teacherString != 'string') return reject('Errorr') // callback si no es resuelta 
                                                                       // la promesa

            return resolve(teacherString)
        })
    }
})
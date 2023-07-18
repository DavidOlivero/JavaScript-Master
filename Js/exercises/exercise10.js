'use strict'

window.addEventListener('load', () => {
    let sendButton = document.querySelector('#form')

    sendButton.addEventListener('submit', () => {
        let nameInput = document.querySelector('#name').value
        let surnames = document.querySelector('#surnames').value
        let yearsOld = document.querySelector('#years-old').value

        let nameInputContiner = document.getElementsByClassName('name')[0]
        let surnamesContiner = document.getElementsByClassName('surnames')[0]
        let yearsOldContiner = document.getElementsByClassName('years-old')[0]

        let textName = document.createTextNode(' - ' + nameInput)
        let textSurnames = document.createTextNode(' - ' + surnames)
        let textYearsOld = document.createTextNode(' - ' + yearsOld)

        let strongNameLabel = document.createElement('strong')
        let strongSurnamesLabel = document.createElement('strong')
        let strongYearsOldLabel = document.createElement('strong')

        let nameLabel = document.createElement('p')
        let surnamesLabel = document.createElement('p')
        let yearsOldLabel = document.createElement('p')

        nameLabel.append(textName)
        surnamesLabel.append(textSurnames)
        yearsOldLabel.append(textYearsOld)

        strongNameLabel.append(nameLabel)
        strongSurnamesLabel.append(surnamesLabel)
        strongYearsOldLabel.append(yearsOldLabel)

        nameInputContiner.append(strongNameLabel)
        surnamesContiner.append(strongSurnamesLabel)
        yearsOldContiner.append(strongYearsOldLabel)

        strongNameLabel.style.display = 'inline-block';
        strongSurnamesLabel.style.display = 'inline-block'
        strongYearsOldLabel.style.display = 'inline-block'
    })
})
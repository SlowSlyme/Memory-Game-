const cardArray = [
    {
        name:'bee',
        img:'images/bee.jpg',
    },
    {

        name:'bird',
        img:'images/bird.jpg', 
    },
    {

        name:'cat',
        img:'images/cat.jpg', 
    },
    {

        name:'lion',
        img:'images/lion.jpg', 
    },
    {

        name:'penguin',
        img:'images/penguin.jpg', 
    },
    {

        name:'turtle',
        img:'images/turtle.jpg', 
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement ('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
   const cards = document.querySelectorAll('img')
   const optionOneId = cardsChosenIds[0]
   const optionTwoId = cardsChosenIds[1]
   console.log('check for match!')
   if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('you have clicked the same image!')
   }
   
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', images/white.jpg)
        cards[optionTwoId].setAttribute('src', images/white.jpg)
        cards [optionOneId].removeEventListener('click', flipCard)
        cards [optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')    
        alert('Sorry Try Again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations, you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
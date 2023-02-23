const cardArray = [
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'icecream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'icecream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'level2',
        img: 'img/level2.png'
    },
    {
        name: 'level3',
        img: 'img/level3.png'
    },
    {
        name: 'level2',
        img: 'img/level2.png'
    },
    {
        name: 'level3',
        img: 'img/level3.png'
    },
    {
        name: 'level4',
        img: 'img/level4.png'
    },
    {
        name: 'level5',
        img: 'img/level5.png'
    },
    {
        name: 'level4',
        img: 'img/level4.png'
    },
    {
        name: 'level5',
        img: 'img/level5.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
let cardChosen = []
let cardsChosenIds = []
const cardsWon = []
let moves = document.querySelector("#moves")

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.classList.add("card")
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
        card.addEventListener("click", flipCard)
    }

}

function show() {

    for (let i = 0; i < cardArray.length; i++) {
        let card = document.querySelectorAll(".card")
        card[i].setAttribute('src', cardArray[i].img)
    }

    setTimeout(function () {

        for (let i = 0; i < cardArray.length; i++) {
            let card = document.querySelectorAll(".card")
            card[i].setAttribute('src', 'img/blank.png')
        }

    }, 2500)

}

createBoard()
show()

function checkMatch() {
    const cards = document.querySelectorAll("#grid img")
    const option1 = cardsChosenIds[0]
    const option2 = cardsChosenIds[1]

    console.log("check for a match")

    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        cards[option1].setAttribute('src', 'img/blank.png')
        cards[option2].setAttribute('src', 'img/blank.png')
    } else if (cardChosen[0] == cardChosen[1]) {
        setTimeout(function () {
            cards[option1].setAttribute('src', 'img/white.png')
            cards[option2].setAttribute('src', 'img/white.png')
            cards[option1].removeEventListener('click', flipCard)
            cards[option2].removeEventListener('click', flipCard)
            cardsWon.push(cardChosen)
        }, 500)
    } else {
        setTimeout(function () {
            cards[option1].setAttribute('src', 'img/blank.png')
            cards[option2].setAttribute('src', 'img/blank.png')
        }, 800)
        moves.innerHTML--
        if (moves.innerHTML == 0) {
            alert("sorry you lost")
            gridDisplay.style.display = "none"
            let goagain = document.querySelector(".again")
            goagain.style.display = "inline-block"
            goagain.innerHTML = "Try Again"
            goagain.setAttribute('href', '/level2/level2.html')
        }
    }
    document.querySelector("#score").innerHTML = cardsWon.length

    cardChosen = []
    cardsChosenIds = []

    if (cardsWon.length + 1 == (cardArray.length / 2)) {
        document.querySelector("#score").innerHTML = "You Won"
        gridDisplay.style.display = "none"
        setTimeout(function () {
            document.querySelector(".again").classList.add('showthat')
        }, 500)
    }


}

function flipCard() {

    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        checkMatch()
    }

}


document.querySelector('.levels-btn').addEventListener('click', function () {
    document.querySelector(".all-levels").classList.add('open-menu')
})

document.querySelector('.exit').addEventListener('click', function () {
    document.querySelector(".all-levels").classList.remove('open-menu')
})


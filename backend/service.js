// All functions take type:string as input for now!

// Helper Functions
function getRandomInt(max) { //Exclusive
    return Math.floor(Math.random() * Math.floor(max));
}


// Stateless Routes

function generateCardDeck() {
    // const cardTemplate = {
    //     displayedSuite: 'v', //hearts, spades, diamonds, clubs
    //     value: 1,
    //     displayedValue: 1,
    //     subValue: 0
    // }
    let deckOfCards = []

    const subValueMap = {
        0: 'Diamonds',
        1: 'Clubs',
        2: 'Hearts',
        3: 'Spades'
    }

    const valueMap = {
        0: 'Ace',
        1: '2',
        2: '3',
        3: '4',
        4: '5',
        5: '6',
        6: '7',
        7: '8',
        8: '9',
        9: '10',
        10: 'Jack',
        11: 'Queen',
        12: 'King'
    }

    const numberOfSuites = Object.keys(subValueMap).length
    const numberOfValues = Object.keys(valueMap).length

    for (i = 0; i < numberOfValues; i++) {
        for (j = 0; j < numberOfSuites; j++) {
            deckOfCards.push({
                suite: subValueMap[j],
                displayedValue: valueMap[i],
                value: i,
                subValue: j
            })
        }
    }

    return deckOfCards
}

function shuffleCardDeck(currentDeck) {
    const currentDeckArray = JSON.parse(currentDeck)
    const lenOfCurrentDeckArray = currentDeckArray.length
    let currLenOfDeck = lenOfCurrentDeckArray
    let shuffledDeck = []

    for (i = 0; i < lenOfCurrentDeckArray; i++) {
        // Pick random card
        const indexOfRandomCard = getRandomInt(currLenOfDeck)
        const randomCard = currentDeckArray[indexOfRandomCard]

        // Add card to new deck
        shuffledDeck.push(randomCard)

        // Remove card from original deck
        currentDeckArray.splice(indexOfRandomCard, 1)

        // Lower the deck count
        currLenOfDeck--
    }

    return shuffledDeck
}

function drawCardsFromTopofDeck(currentDeck, amountToDraw) {

    let currentDeckObject = JSON.parse(currentDeck)
    const lenCurrentDeckObject = currentDeckObject.length
    let cardsDrawn = []

    // Check we dont overdraw
    if (amountToDraw <= lenCurrentDeckObject) {
        for (i = 0; i < amountToDraw; i++) {
            cardsDrawn.push(currentDeckObject.pop())
        }
        return {
            deckAfterDraw: currentDeckObject,
            cardsDrawn: cardsDrawn
        }
    }
    else {
        return 'Error: Overdrawn'
    }
}

function drawSelectedCards(){

}

function addCardsToDeck(){
    
}

// Stateful Routes

module.exports = {
    generateCardDeck: generateCardDeck,
    shuffleCardDeck: shuffleCardDeck,
    drawCardsFromTopofDeck: drawCardsFromTopofDeck
}
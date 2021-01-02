const cardApi = require('./service')

console.log(JSON.stringify(cardApi.generateCardDeck()))
// console.log(cardApi.shuffleCardDeck(JSON.stringify(cardApi.generateCardDeck())))

// const stingifiedDeck = JSON.stringify(cardApi.generateCardDeck())
// let res = cardApi.drawCards(stingifiedDeck, 53)
// console.log(res)
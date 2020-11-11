const cardApi = require('./service')

// console.log(cardApi.generateCardDeck())
console.log(cardApi.shuffleCardDeck(JSON.stringify(cardApi.generateCardDeck())))
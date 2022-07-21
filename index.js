// card values with ace high
const cardValues = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'JACK': 10,
    'QUEEN': 10,
    'KING': 10,
    'ACE': 11,
}

// creates 6 decks of cards and draws 4 cards, 2 for the player and 2 for dealer
function drawTwoCards() {
    var apiUrl = `https://deckofcardsapi.com/api/deck/new/draw/?count=4&deck_count=6`

    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            // console.log(data)

            let playerCards = (data.cards[0, 1]);
            let dealerCards = (data.cards[2, 3]);



            let playerCardVal = (data.cards[0].value + data.cards[1].value);
            let dealerCardVal = (data.cards[2].value + data.cards[3].value);
            console.log(playerCardVal);
            console.log(dealerCardVal);
            console.log(data.deck_id);
        });
    });
}

drawTwoCards();
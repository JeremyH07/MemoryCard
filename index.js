const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockboard = flase;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
    .then((res) => res.json())
    .then((data) => {
        cards = [...data, ...data];
        shuffleCards();
        generateCards();
    });

function shuffleCards() {
    let currentIndex = cards.length,
        randomIndex,
        temporyValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporyValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporyValue;
    }
}

function generateCards() {
    for(let card of cards){
        cons cardElement = document.createElement("div")
        cardElement.classlist.add("card");
        cardElement.setAttribute("data-name", card.name);
    }
}
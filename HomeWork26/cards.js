



 //בניית מערך של 52 קלפים
let cardTypes = [ "&hearts;", "&diams;", "&spades;", "&clubs;"];
let cardWeights = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

// בניית אובייקט לכול קלף והכנסתו למערך
class Card{
    
constructor(cardType,cardWeight) {

    this.cardType = cardType,
    this.cardWeight = cardWeight

}

  }

function createDeck() {

cardTypes.forEach(_cardType => {

 cardWeights.forEach(_cardWeight => {

  deck.push(new Card(_cardType, _cardWeight));

     })

   })

// ערבוב החפיסה ראנדומאלית
for(let i = 0; i < 52; i++) {

let tempCard = deck[i];
let randomIndex = Math.floor(Math.random()* 52);
deck[i] = deck[randomIndex];
deck[randomIndex] = tempCard;

     }
  
console.log(deck);


// הדפסת מערך הקלפים לדפדפן
deck.forEach(_card => {

let eachCard = document.createElement("div");
eachCard.innerHTML =  _card.cardWeight + " " + _card.cardType;

// for each card give class name to do style css
eachCard.classList.add("oneCardCSS");

// in click on card its plip back
eachCard.addEventListener('click' , function() {


eachCard.style.background = "url(./pic_1.png)";
eachCard.style.color = "white";
  
}) 



if( _card.cardType === "&spades;" || _card.cardType === "&clubs;") {

eachCard.classList.add("black");

} else {

eachCard.classList.add("red");

}


// append eachCard to deck div
document.getElementById("deck").append(eachCard);

   })



}



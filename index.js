const cardOne = document.querySelector('.oneCard');
const cardTwo = document.querySelector('.twoCard');
const cardThree = document.querySelector('.threeCard');
const carFor = document.querySelector('.forCard');
const mixCards = document.querySelector('.mixTheCards');
const butBut = document.querySelector('.but');
const topButton = document.querySelector('.top');
const allCards = document.querySelector('.cards');
const allButtons = document.querySelector('.buttons');
const cardDesk = document.querySelector('.card-desk');
const tableStage = document.querySelector('.table');
const cardsArray = document.querySelectorAll('.all');


let selectedTd;

allCards.onclick = function(event) {
  let target = event.target; // где был клик?

  if (target.tagName != 'IMG') return; // не на TD? тогда не интересует

  highlight(target); // подсветить TD
};

function highlight(img) {
  if (selectedTd) { // убрать существующую подсветку, если есть
    selectedTd.classList.remove('red');
  }
  selectedTd = img;
  selectedTd.classList.add('red'); // подсветить новый td
};

//buttons
let select;
allButtons.onclick = function(event) {
    let target = event.target; // где был клик?
  
    if (target.tagName != 'BUTTON') return; // не на TD? тогда не интересует
  
    light(target); 
    mixCards.classList.add('notNone')// подсветить TD
  };
  
  function light(button) {
    if (select) { // убрать существующую подсветку, если есть
      select.classList.remove('red1');
    }
    select = button;
    select.classList.add('red1'); // подсветить новый td
  };
//mixCard-display none

mixCards.addEventListener('click', function(){
   
    mixCards.classList.remove('notNone')
    cardDesk.classList.add('card-desk-notNone')
    tableStage.classList.add('table_block')
});

//mix desk 
const arrCardsall = Array.cardsArray;

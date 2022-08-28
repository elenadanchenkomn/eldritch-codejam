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
const divCard = document.querySelector('.pictures');
const imgCard = document.querySelector('.picture');

let selectedTd;

allCards.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'IMG') return; 

  highlight(target); 
};

function highlight(img) {
  if (selectedTd) { 
    selectedTd.classList.remove('red');
  }
  selectedTd = img;
  selectedTd.classList.add('red');  
};

//buttons
let select;
allButtons.onclick = function(event) {
    let target = event.target; 
  
    if (target.tagName != 'BUTTON') return; 
    light(target); 
    mixCards.classList.add('notNone')
  };
  
  function light(button) {
    if (select) { 
      select.classList.remove('red1');
    }
    select = button;
    select.classList.add('red1'); 
  };
//mixCard-display none

mixCards.addEventListener('click', function(){
   
    mixCards.classList.remove('notNone')
    cardDesk.classList.add('card-desk-notNone')
    tableStage.classList.add('table_block')
});

//mix desk 



  
 

const cardsData = [
    {  src: '="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue1.png?raw=true" ' ,
      id: 'blue1',
      
      difficulty: 'hard',
      color:'blue'
    },
    { src:'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue2.png?raw=true' ,
      id: 'blue2',
      
      difficulty: 'hard',
      color:'blue'
    },
    {src: 'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue3.png?raw=true',
      id: 'blue3',
     
      difficulty: 'easy',
      color:'blue'
    },
   
    {src:'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue4.png?raw=true' ,
      id: 'blue4',
      
      difficulty: 'easy',
      color:'blue'
    },
    {src:'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue5.png?raw=true' ,
      id: 'blue5',
      
      difficulty: 'easy',
      color:'blue'
    },
    {src:'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue6.png?raw=true' ,
      id: 'blue6',
      
      difficulty: 'hard',
      color:'blue'
    },
    {src:'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue7.png?raw=true' ,
      id: 'blue7',
      
      difficulty: 'normal',
      color:'blue'
    },
    {src:'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue8.png?raw=true' ,
      id: 'blue8',
     
      difficulty: 'hard',
      color:'blue'
    },
    {src: 'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue9.png?raw=true',
      id: 'blue9',
     
      difficulty: 'normal',
      color:'blue'
    },
    {src: 'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue10.png?raw=true',
      id: 'blue10',
      
      difficulty: 'easy',
      color:'blue'
    },
    {src:'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue12.png?raw=true' ,
      id: 'blue11',
     
      difficulty: 'normal',
      color:'blue'
    },
    {src: 'https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/blue/blue11.png?raw=true',
      id: 'blue12',
      
      difficulty: 'normal',
      color:'blue'
    },
  ]
  let srccard;
  cardsData.forEach(i=>{
srccard = i.src ;
  
})
  
  cardDesk.addEventListener('click',function(srccard){ 
 
imgCard.setAttribute('src' ,srccard);

});
 

   
         




/*

            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown1.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown2.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown3.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown4.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown5.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown6.png?raw=true" alt="card" class="all brown hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown7.png?raw=true" alt="card" class="all brown hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown8.png?raw=true" alt="card" class="all brown hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown9.png?raw=true" alt="card" class="all brown hard">
            <img src="https://github.com/elenadanchenckomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown10.png?raw=true" alt="card" class="all brown hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown11.png?raw=true" alt="card" class="all brown light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown12.png?raw=true" alt="card" class="all brown light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown13.png?raw=true" alt="card" class="all brown light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown14.png?raw=true" alt="card" class="all brown light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown15.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown16.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown17.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown18.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown19.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown20.png?raw=true" alt="card" class="all brown normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/brown/brown21.png?raw=true" alt="card" class="all brown light">

            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green1.png?raw=true" alt="card" class="all greens light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green2.png?raw=true" alt="card" class="all greens hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green3.png?raw=true" alt="card" class="all greens hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green4.png?raw=true" alt="card" class="all greens hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green5.png?raw=true" alt="card" class="all greens hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green6.png?raw=true" alt="card" class="all greens hard">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green7.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green8.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green9.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green10.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green11.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green12.png?raw=true" alt="card" class="all greens light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green13.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green14.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green15.png?raw=true" alt="card" class="all greens normal">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green16.png?raw=true" alt="card" class="all greens light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green17.png?raw=true" alt="card" class="all greens light">
            <img src="https://github.com/elenadanchenkomn/eldritch-codejam/blob/main/assets/MythicCards/green/green18.png?raw=true" alt="card" class="all greens light"></img>
            */
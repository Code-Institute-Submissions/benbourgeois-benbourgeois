const cards = document.querySelectorAll(`.memory-card`);

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.add(`flip`);
    
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        
        return;
    }
        //second click
        secondCard = this;
        
        checkForMatch();
    
}

function checkForMatch() {
    // do cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            //match!
            disableCards();
        } else {
            //no match!
            unflipCards();
        }
}

function disableCards() {
    //match!
    firstCard.removeEventListener(`click`, flipCard);
    secondCard.removeEventListener(`click`, flipCard);
    
    resetBoard()
}

function unflipCards() {
    //no match!
    
    lockBoard = true;
    
    setTimeout(() => {
    firstCard.classList.remove(`flip`);
    secondCard.classList.remove(`flip`);
        
    resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
       let randomPos = Math.floor(Math.random() * 12)
       card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener(`click`, flipCard))


//Timer

var h1 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start */
start.onclick = timer;

/* Stop */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

clear.onclick = function shuffle() {
    cards.forEach(card => {
       let randomPos = Math.floor(Math.random() * 12)
       card.style.order = randomPos;
    });
}

clear.onclick = function refreshPage(){
    window.location.reload()
}
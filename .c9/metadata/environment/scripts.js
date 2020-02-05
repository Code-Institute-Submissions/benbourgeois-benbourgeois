{"filter":false,"title":"scripts.js","tooltip":"/scripts.js","undoManager":{"mark":32,"position":32,"stack":[[{"start":{"row":0,"column":0},"end":{"row":126,"column":1},"action":"insert","lines":["const cards = document.querySelectorAll(`.memory-card`);","","let hasFlippedCard = false;","let lockBoard = false;","let firstCard, secondCard;","","function flipCard() {","    if (lockBoard) return;","    if (this === firstCard) return;","    ","    this.classList.add(`flip`);","    ","    if (!hasFlippedCard) {","        //first click","        hasFlippedCard = true;","        firstCard = this;","        ","        return;","    }","        //second click","        secondCard = this;","        ","        checkForMatch();","    ","}","","function checkForMatch() {","    // do cards match?","        if (firstCard.dataset.framework === secondCard.dataset.framework) {","            //match!","            disableCards();","        } else {","            //no match!","            unflipCards();","        }","}","","function disableCards() {","    //match!","    firstCard.removeEventListener(`click`, flipCard);","    secondCard.removeEventListener(`click`, flipCard);","    ","    resetBoard()","}","","function unflipCards() {","    //no match!","    ","    lockBoard = true;","    ","    setTimeout(() => {","    firstCard.classList.remove(`flip`);","    secondCard.classList.remove(`flip`);","        ","    resetBoard();","    }, 1500);","}","","function resetBoard() {","    [hasFlippedCard, lockBoard] = [false, false];","    [firstCard, secondCard] = [null, null];","}","","(function shuffle() {","    cards.forEach(card => {","       let randomPos = Math.floor(Math.random() * 12)","       card.style.order = randomPos;","    });","})();","","cards.forEach(card => card.addEventListener(`click`, flipCard))","","","//Timer","","var h1 = document.getElementsByTagName('h2')[0],","    start = document.getElementById('start'),","    stop = document.getElementById('stop'),","    clear = document.getElementById('clear'),","    seconds = 0, minutes = 0, hours = 0,","    t;","","function add() {","    seconds++;","    if (seconds >= 60) {","        seconds = 0;","        minutes++;","        if (minutes >= 60) {","            minutes = 0;","            hours++;","        }","    }","    ","    h1.textContent = (hours ? (hours > 9 ? hours : \"0\" + hours) : \"00\") + \":\" + (minutes ? (minutes > 9 ? minutes : \"0\" + minutes) : \"00\") + \":\" + (seconds > 9 ? seconds : \"0\" + seconds);","","    timer();","}","function timer() {","    t = setTimeout(add, 1000);","}","timer();","","","/* Start */","start.onclick = timer;","","/* Stop */","stop.onclick = function() {","    clearTimeout(t);","}","","/* Clear */","clear.onclick = function() {","    h1.textContent = \"00:00:00\";","    seconds = 0; minutes = 0; hours = 0;","}","","clear.onclick = function shuffle() {","    cards.forEach(card => {","       let randomPos = Math.floor(Math.random() * 12)","       card.style.order = randomPos;","    });","}","","clear.onclick = function refreshPage(){","    window.location.reload()","}"],"id":1}],[{"start":{"row":100,"column":0},"end":{"row":100,"column":1},"action":"insert","lines":["/"],"id":2},{"start":{"row":100,"column":1},"end":{"row":100,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":30,"column":27},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":31,"column":0},"end":{"row":31,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":31,"column":8},"end":{"row":31,"column":12},"action":"remove","lines":["    "],"id":5},{"start":{"row":31,"column":4},"end":{"row":31,"column":8},"action":"remove","lines":["    "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":4},"action":"remove","lines":["    "]},{"start":{"row":30,"column":27},"end":{"row":31,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":7},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":117},"action":"insert","lines":["freeCodeCamp.org youtube: https://www.youtube.com/watch?v=ZniVgo8U7ek&list=LLX47phgrGqhYWSuoxWb2bvA&index=3&t=796s"],"id":9}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "],"id":10}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"remove","lines":[" "],"id":11}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["f"],"id":12},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["o"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["u"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["n"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["d"]}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":[" "],"id":13},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["J"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["S"]}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":[" "],"id":14},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["c"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["i"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["o"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["d"]}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"remove","lines":["d"],"id":15},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"remove","lines":["o"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":["i"]}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["o"],"id":16},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["d"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":[" "],"id":17},{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["h"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["e"]},{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["r"]},{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":[" "],"id":18},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["f"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["o"]},{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":[" "],"id":19},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["c"]},{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["a"]},{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["r"]},{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["d"]}],[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":[" "],"id":20},{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["a"]},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["n"]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["i"]},{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["m"]},{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["a"]},{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"insert","lines":["t"]},{"start":{"row":0,"column":37},"end":{"row":0,"column":38},"action":"insert","lines":["i"]},{"start":{"row":0,"column":38},"end":{"row":0,"column":39},"action":"insert","lines":["o"]},{"start":{"row":0,"column":39},"end":{"row":0,"column":40},"action":"insert","lines":["n"]}],[{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"insert","lines":[" "],"id":21}],[{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"remove","lines":[" "],"id":22}],[{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"insert","lines":[":"],"id":23}],[{"start":{"row":0,"column":41},"end":{"row":0,"column":42},"action":"insert","lines":[" "],"id":24}],[{"start":{"row":74,"column":0},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":75,"column":0},"end":{"row":76,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":76,"column":0},"end":{"row":76,"column":89},"action":"insert","lines":["codepad.co site: https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css"],"id":26}],[{"start":{"row":76,"column":0},"end":{"row":76,"column":1},"action":"insert","lines":["/"],"id":27},{"start":{"row":76,"column":1},"end":{"row":76,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":76,"column":2},"end":{"row":76,"column":3},"action":"insert","lines":[" "],"id":28},{"start":{"row":76,"column":3},"end":{"row":76,"column":4},"action":"insert","lines":["F"]},{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":["o"]},{"start":{"row":76,"column":5},"end":{"row":76,"column":6},"action":"insert","lines":["u"]},{"start":{"row":76,"column":6},"end":{"row":76,"column":7},"action":"insert","lines":["n"]}],[{"start":{"row":76,"column":6},"end":{"row":76,"column":7},"action":"remove","lines":["n"],"id":29},{"start":{"row":76,"column":5},"end":{"row":76,"column":6},"action":"remove","lines":["u"]},{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"remove","lines":["o"]},{"start":{"row":76,"column":3},"end":{"row":76,"column":4},"action":"remove","lines":["F"]},{"start":{"row":76,"column":2},"end":{"row":76,"column":3},"action":"remove","lines":[" "]}],[{"start":{"row":76,"column":2},"end":{"row":76,"column":3},"action":"insert","lines":["F"],"id":30},{"start":{"row":76,"column":3},"end":{"row":76,"column":4},"action":"insert","lines":["o"]},{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":["u"]},{"start":{"row":76,"column":5},"end":{"row":76,"column":6},"action":"insert","lines":["n"]},{"start":{"row":76,"column":6},"end":{"row":76,"column":7},"action":"insert","lines":["d"]}],[{"start":{"row":76,"column":7},"end":{"row":76,"column":8},"action":"insert","lines":[" "],"id":31},{"start":{"row":76,"column":8},"end":{"row":76,"column":9},"action":"insert","lines":["T"]},{"start":{"row":76,"column":9},"end":{"row":76,"column":10},"action":"insert","lines":["i"]},{"start":{"row":76,"column":10},"end":{"row":76,"column":11},"action":"insert","lines":["m"]},{"start":{"row":76,"column":11},"end":{"row":76,"column":12},"action":"insert","lines":["e"]},{"start":{"row":76,"column":12},"end":{"row":76,"column":13},"action":"insert","lines":["r"]}],[{"start":{"row":76,"column":13},"end":{"row":76,"column":14},"action":"insert","lines":[" "],"id":32},{"start":{"row":76,"column":14},"end":{"row":76,"column":15},"action":"insert","lines":["c"]},{"start":{"row":76,"column":15},"end":{"row":76,"column":16},"action":"insert","lines":["o"]},{"start":{"row":76,"column":16},"end":{"row":76,"column":17},"action":"insert","lines":["d"]},{"start":{"row":76,"column":17},"end":{"row":76,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":76,"column":18},"end":{"row":76,"column":19},"action":"insert","lines":[" "],"id":33},{"start":{"row":76,"column":19},"end":{"row":76,"column":20},"action":"insert","lines":["h"]},{"start":{"row":76,"column":20},"end":{"row":76,"column":21},"action":"insert","lines":["e"]},{"start":{"row":76,"column":21},"end":{"row":76,"column":22},"action":"insert","lines":["r"]},{"start":{"row":76,"column":22},"end":{"row":76,"column":23},"action":"insert","lines":["e"]},{"start":{"row":76,"column":23},"end":{"row":76,"column":24},"action":"insert","lines":[":"]}],[{"start":{"row":76,"column":24},"end":{"row":76,"column":25},"action":"insert","lines":[" "],"id":34}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":76,"column":114},"end":{"row":76,"column":114},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1580863084656,"hash":"28fc43a8156f7b373f3364873d86d1185a0b604c"}
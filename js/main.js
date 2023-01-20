/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');
const RPS_LOOKUP = {
    r: "imgs/rock.png",
    p: "imgs/paper.png",
    s: "imgs/scissors.png"
};

/*----- app's state (variables) -----*/
let scores; // Object key of "p" -> player; 
            // key of "t" -> tie; 
            // key of "c" -> computer
let results; // Object key of "p" for the player result
             // Values of "r" -> rock; "p" -> paper; "s" -> scissors;
let winner; // String "p" if player wins; "t" for tie; "c" if computer wins

/*----- cached element references -----*/
const pResultEl = document.getElementById("p-result");
const cResultEl = document.getElementById("c-result");


/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize all state then call render();
function init () {
    scores = {
        p: 0,
        t: 0,
        c: 0
    };

    results = {
        p: "r",
        c: "r"
    };

    winner = "t";

    render();
}

function renderScores() {
    for (let key in scores) {
        const scoreEl = document.getElementById(`${key}-score`);
        scoreEl.innerText = scores[key]; // Square bracket notation used to dynamically access data
    }
}

function renderResults() {
    pResultEl.src = RPS_LOOKUP[results.p]; // Square bracket notation used to dynamiccaly access data
    cResultEl.src = RPS_LOOKUP[results.c];
}

function render() {
    renderScores();
    renderResults();
}
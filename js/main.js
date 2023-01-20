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
document.querySelector("main").addEventListener("click", handleChoice);

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

// In response to user interaction (player makes a move),
// we update all impacted state, call render()
function handleChoice (evt) {
    // Guards (do nothing unless one of the three buttons were clicked)
    if (evt.target.tagName !== "BUTTON") return;
    // Player has made a choice
    results.p = evt.target.innerText.toLowerCase();
    // Compute a random choice for the computer
    results.c = getRandomRPS();
    winner = getWinner();
    render();
}

function getWinner () {
    
}

function getRandomRPS() {
    const rps = Object.keys(RPS_LOOKUP);
    const randomIdx = Math.floor(Math.random() * rps.length);
    return rps[randomIdx];
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

// Transfer/visualize all state to the DOM
function render() {
    renderScores();
    renderResults();
}
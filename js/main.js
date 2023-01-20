/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');

/*----- app's state (variables) -----*/
let scores; // Object key of "p" -> player; 
            // key of "t" -> tie; 
            // key of "c" -> computer
let results; // Object key of "p" for the player result
             // Values of "r" -> rock; "p" -> paper; "s" -> scissors;
let winner; // String "p" if player wins; "t" for tie; "c" if computer wins

/*----- cached element references -----*/


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

function render() {
    
}
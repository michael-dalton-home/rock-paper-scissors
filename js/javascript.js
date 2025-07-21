
// Scores
let humanScore = 0;
let computerScore = 0;

// Hooks to update game status in UI
const gameStatus = document.querySelector('#game-status');
const gameScore  = document.querySelector('#game-score');

// Constants
const ROCK      = 'rock';
const PAPER     = 'paper';
const SCISSORS  = 'scissors';
const WINNING_SCORE = 5



// write a function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    rnd = Math.random();

    if (rnd <= 0.333)
        return ROCK;
    else if (rnd <= 0.666)
        return PAPER;
    else
        return SCISSORS;
}

// write a function that takes the user choice and returns it.
function getHumanChoice() {
    instr = prompt(`Enter one of [rock, paper, scissors]: `);

    return instr;
}

/* In: humanChoice, computerChoice - both player choices
*/
function playRound(humanChoice, computerChoice) {
    // humanChoice = humanChoice.toLowerCase();


    if (humanChoice === computerChoice) {
        console.log(`TIE: Both ${humanChoice}`);
        gameStatus.textContent = `It's a draw - you both chose ${humanChoice}`;
    }
    else if ((humanChoice === ROCK && computerChoice === SCISSORS) ||
        (humanChoice === SCISSORS && computerChoice === PAPER) ||
        (humanChoice === PAPER && computerChoice === ROCK)) {
            gameStatus.textContent = `You WON that round - ${humanChoice}`+
                ` beats ${computerChoice}`;
            humanScore ++;
            gameScore.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        }
    else if ((computerChoice === ROCK && humanChoice === SCISSORS) ||
        (computerChoice === SCISSORS && humanChoice === PAPER) ||
        (computerChoice === PAPER && humanChoice === ROCK)) {
            gameStatus.textContent = `You LOST that round - ${humanChoice}`+
                ` loses to ${computerChoice}`;
            computerScore ++;
            gameScore.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        }
    else
        winner = `missing h${humanChoice}:c${computerChoice}`;

    if (computerScore >= WINNING_SCORE) {
        gameStatus.textContent += `\nCOMPUTER wins the GAME`;
        gameReset(false);
    }
    else if (humanScore >= WINNING_SCORE) {
        gameStatus.textContent += `\nYOU win the GAME.  Well done`;
        gameReset(false);
    }
}

function playGame() {
    console.log("Let's play ...(5 rounds)");

    // for (let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score: ${humanScore}:${computerScore}`);
    //}

}

function manageButtonClicks(e) {
    console.log(`Button clicked ${e.target.id}`);

    if (e.type === 'click') {
        let humanChoice = 'none';

        switch (e.target.id) {
        case 'r-button': humanChoice = ROCK;      break;
        case 'p-button': humanChoice = PAPER;     break;
        case 's-button': humanChoice = SCISSORS;  break;
        }

        if (humanChoice !== 'none') {
            playRound(humanChoice, getComputerChoice());
            console.log(`Score: ${humanScore}:${computerScore}`);
        }
    }
}

function gameReset(ui) {
    humanScore = 0;
    computerScore = 0;

    if (ui) {
        gameStatus.textContent = `Game ready.  Make a choice using the buttons above.`;
        gameScore.textContent = `You: ${humanScore} Computer: ${computerScore}`;
    }
}

/* MAIN
*/
{
    // Setup initial state
    gameReset(true);

    // Setup callbacks for human choice buttons
    const myBody = document.querySelector('.body-content');

    myBody.addEventListener('click', manageButtonClicks);

    console.log("End.");

}
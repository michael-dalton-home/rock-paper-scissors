
let humanScore = 0;
let computerScore = 0;

// write a function that randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    rnd = Math.random();

    if (rnd <= 0.333)
        return "rock";
    else if (rnd <= 0.666)
        return "paper";
    else
        return "scissors";
}

// write a function that takes the user choice and returns it.
function getHumanChoice() {
    instr = prompt(`Enter one of [rock, paper, scissors]: `);

    return instr;
}

/* In: humanChoice, computerChoice - both player choices
*/
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`TIE: Both ${humanChoice}`);
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
            console.log(`WIN: You:${humanChoice}, Cpu:${computerChoice}`);
            humanScore ++;
        }
    else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')) {
            console.log(`LOSE: You:${humanChoice}, Cpu:${computerChoice}`);
            computerScore ++;
        }
    else
        winner = `missing h${humanChoice}:c${computerChoice}`;
}

function playGame() {
    console.log("Let's play ...(5 rounds)");

    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score: ${humanScore}:${computerScore}`);
    }

}
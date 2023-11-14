
let playerChoiceText = document.getElementById("playerChoice");
let opponentChoiceText = document.getElementById("opponentChoice");

const lapisButton = document.getElementById("Lapis");
const scalpellusButton = document.getElementById("Scalpellus");
const papyrusButton = document.getElementById("Papyrus");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

const choices = ["Lapis", "Scalpellus", "Papyrus"];


lapisButton.addEventListener("click", function() {
    executePlayerSelection("Lapis")
});

scalpellusButton.addEventListener("click", function() {
    executePlayerSelection("Scalpellus")
});

papyrusButton.addEventListener("click", function() {
    executePlayerSelection("Papyrus")
});

resetButton.addEventListener("click", function() {
    reset();
});

resetButton.hidden = true;

function reset () {
    lapisButton.hidden = false;
    papyrusButton.hidden = false;
    scalpellusButton.hidden = false;
    resetButton.hidden = true;
    result.innerText = "Make your selection!";
    playerChoiceText.hidden = true;
    opponentChoiceText.hidden = true;
}

function executePlayerSelection(playerChoice) {
    let opponentChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceText.innerText = "You chose: " + playerChoice;
    opponentChoiceText.innerText = "Ætius chose: " + opponentChoice;

    if ( playerChoice === opponentChoice ) {
        draw(playerChoice, opponentChoice);
    } else if ((playerChoice === "Lapis" && opponentChoice === "Papyrus") ||
            (playerChoice === "Papyrus" && opponentChoice === "Scalpellus") ||
            (playerChoice === "Scalpellus" && opponentChoice === "Lapis")) {
                playerLoses(playerChoice, opponentChoice);
    } else {
        playerWins(playerChoice, opponentChoice);
    }
    lapisButton.hidden = true;
    papyrusButton.hidden = true;
    scalpellusButton.hidden = true;
    resetButton.hidden = false;
    playerChoiceText.hidden = false;
    opponentChoiceText.hidden = false;
}

function draw (left, right) {
    result.innerText = "\"Draw! We are equals in this contest!\""
}

function playerWins (left, right) {
    result.innerText = "\"You are victorious, what a choice!\""
}

function playerLoses (left, right) {
    result.innerText = "\"Looks like you lose, better luck next time!\""
}
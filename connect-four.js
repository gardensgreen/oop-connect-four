import Game from "./game.js";

let game;
const player1Input = document.getElementById("player-1-name");
const player2Input = document.getElementById("player-2-name");
const newGameBtn = document.getElementById("new-game");

const disableGame = function () {
    if (player1Input.value && player2Input.value) {
        newGameBtn.disabled = false;
    } else {
        newGameBtn.disabled = true;
    }
};

const updateUI = function () {
    if (game) {
        document
            .getElementById("board-holder")
            .classList.remove("is-invisible");
    } else {
        document.getElementById("board-holder").classList.add("is-invisible");
    }
};

player1Input.addEventListener("keyup", disableGame);

player2Input.addEventListener("keyup", disableGame);

newGameBtn.addEventListener("click", (e) => {
    game = new Game(player1Input.value, player2Input.value);
    player1Input.value = "";
    player2Input.value = "";
    disableGame();
    updateUI();
});

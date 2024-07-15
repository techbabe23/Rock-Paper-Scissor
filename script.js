document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const winnerText = document.querySelector(".winner");
    const playerScoreText = document.querySelector(".you");
    const computerScoreText = document.querySelector(".computer");

    let playerScore = 0;
    let computerScore = 0;

    options.forEach(option => {
        option.addEventListener("click", function() {
            const playerChoice = this.querySelector("label").innerText;
            const computerChoice = getComputerChoice();
            const winner = getWinner(playerChoice, computerChoice);

            updateHands(playerChoice, computerChoice);
            updateScore(winner);
            displayWinner(winner);
        });
    });

    document.querySelector(".reset").addEventListener("click", resetGame);

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissor"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getWinner(player, computer) {
        if (player === computer) {
            return "draw";
        }
        if (
            (player === "rock" && computer === "scissor") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissor" && computer === "paper")
        ) {
            return "player";
        } else {
            return "computer";
        }
    }

    function updateHands(player, computer) {
        playerHand.src = `./${player}.svg`;
        computerHand.src = `./${computer}.svg`;
    }

    function updateScore(winner) {
        if (winner === "player") {
            playerScore++;
            playerScoreText.innerText = playerScore;
        } else if (winner === "computer") {
            computerScore++;
            computerScoreText.innerText = computerScore;
        }
    }

    function displayWinner(winner) {
        if (winner === "draw") {
            winnerText.innerText = "It's a draw!";
        } else if (winner === "player") {
            winnerText.innerText = "You win!";
        } else {
            winnerText.innerText = "Computer wins!";
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        playerScoreText.innerText = playerScore;
        computerScoreText.innerText = computerScore;
        playerHand.src = "./rock.svg";
        computerHand.src = "./rock.svg";
        winnerText.innerText = "Choose an option";
    }
});

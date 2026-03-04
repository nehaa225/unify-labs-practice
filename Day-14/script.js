// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attemptsLeft = 10;
let gameOver = false;

function checkGuess() {

    if (gameOver) return;

    let userGuess = parseInt(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    // Using while loop logic concept
    while (attemptsLeft > 0) {

        if (userGuess === randomNumber) {
            message.textContent = "🎉 Correct! You guessed the number!";
            gameOver = true;
            return;
        } 
        else if (userGuess > randomNumber) {
            attemptsLeft--;
            message.textContent = "📉 Too High!";
        } 
        else {
            attemptsLeft--;
            message.textContent = "📈 Too Low!";
        }

        document.getElementById("attempts").textContent = 
            "Attempts Left: " + attemptsLeft;

        if (attemptsLeft === 0) {
            message.textContent = 
                "❌ Game Over! The number was " + randomNumber;
            gameOver = true;
        }

        break; // ensures loop runs per click
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    gameOver = false;
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = 
        "Attempts Left: 10";
    document.getElementById("guessInput").value = "";
}

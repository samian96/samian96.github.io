// Handling Variables //

let board = ["", "", "", "", "","","","",""] // sets the variable for the board 
let currentPlayer = "X"; // sets the variable for the player as X
let gameActive = true; // sets the variable for the game to be active if true

// handle win conditions //

const winCombos = [ // constant variable for the win condition
    [0,1,2], [3,4,5], [6,7,8], // should target rows in the grid
    [0,3,6], [1,4,7], [2,5,8], // should target columns in the grid
    [0,4,8], [2,4,6], // should target the diagonals in the grid
];

// handle session storage for scores between players //

let scoreX = Number(sessionStorage.getItem("scoreX")) || 0; // should set the score to 0 for player x 

let scoreO = Number(sessionStorage.getItem("scoreO")) || 0; // should set the score to 0 for player o

document.getElementById("scoreboard-x").textContent = scoreX; // should grab the scoreboard-x content on html and save the win

document.getElementById("scoreboard-o").textContent = scoreO; // should grab the scoreboard-o content on html and save the win 

// turn display updates // 

function updateTurnDisplay() { // function to update which players turn it is
    document.getElementById("turn").textContent= currentPlayer; // targets the id named turn to show current players turn
}
updateTurnDisplay(); // executes the function

// handling click event listeners for player //

const squares = document.querySelectorAll(".game-square"); // targets all elements with the class of game-square instead of using id selector for each square

squares.forEach((square, index) => { // event function to target squares on the board
    square.addEventListener("click", () => { // event listener to see if the player has input a click of the mouse on the element
        if (board[index] !=="" || !gameActive) // focuses on the board if the game is active
            return; // should return the input of the event listener 
                board[index] = currentPlayer; // should return information from the current players click
                square.textContent = currentPlayer; // should return text content of current player x 

            checkScore(); // should check which players turn it was to return the result of their click
            currentPlayer = currentPlayer === "X"? "O" : "X"; // checking to see if player turn is equal to X player or O player
            updateTurnDisplay(); // should executes function of the event listener 
    })
});

// function to check the win or tie of the match //

function checkScore() { // function to check the score
    for (let combo of winCombos) {  // start of the for loop of this function
        const [a, b, c] = combo; // constant variable to set combo for winning
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) { // checks to see if constant a and c are equal
            gameActive = false; // If I understand right should end the activity of the game
            showMessage(`${board[a]} has Won!`); // should display message that player has won the game
            updateScore(board[a]); // should update the scoreboard for the winning player
            return;
        } 
    }   if (!board.includes("")) { // if game ends in a tie this part of the loop should run
        gameActive = false; // if I understand right should end the activity of the game
        showMessage("Match is a Tie!"); // should display this message if this statement is correct
    }
}; 

// adding alert to display the winning message //

function showMessage(msg) { // if I understand should create an alert message to pop up
    alert(msg);
};

// function to update the score board //

function updateScore(winner) { // function to update the winner of the match
    if (winner === "X") { // statement for if player X wins the match
        scoreX++;  // adds to X players score
        sessionStorage.setItem("scoreX", scoreX); // should save the score in the session storage while website is up
        document.getElementById("scoreboard-x").textContent = scoreX; // should update the score on the scoreboard of the page
    } else { // else statement for if winner player X is not the case
        scoreO++ // adds to O players score 
        sessionStorage.setItem("scoreO", scoreO) // should save the score for player O in the session storage while website isn up
        document.getElementById("scoreboard-o").textContent = scoreO; // should update the score on the scoreboard of the webpage
    }
};

// function to reset game // 

document.getElementById("button-play-again").addEventListener("click", () => { // event that listens for the mouse to click the reset button
    board = ["", "", "", "", "","","","",""]; // targets the scoreboard variable
    currentPlayer = "X"; // targets player x I am assuming
    gameActive = true; // checks to see if the game is active and or sets the game to be active after pressing 
    square.forEach(square => square.textContent =""); // should reset the squares back to their original state hopefully
    updateTurnDisplay(); // should execute the reset after the event listener hears the button click
});

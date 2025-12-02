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

            checkResult(); // should check which players turn it was to return the result of their click
            currentPlayer = currentPlayer === "X"? "O" : "X"; // checking to see if player turn is equal to X player or O player
            updateTurnDisplay(); // should executes function of the event listener 
    })
});

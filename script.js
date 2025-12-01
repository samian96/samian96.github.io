// Handling Variables //

let board = ["", "", "", "", "","","","",""] // sets the variable for the board 
let currentPlayer = "X"; // sets the variable for the player as X
let gameActive = true; // sets the variable for the game to be active if true

// handle win conditions //

const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], // should target rows in the grid
    [0,3,6], [1,4,7], [2,5,8], // should target columns in the grid
    [0,4,8], [2,4,6], // should target the diagonals in the grid
];
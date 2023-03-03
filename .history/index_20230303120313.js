//connect 4++
const prompt = require("prompt-sync")();
const colors = require("ansi-colors")
const rows = 5;
const columns = 6;
let grid = new Array(7);
function createGrid() {
    for (let i = 0; i < 6; i++) {
        grid[i] = new Array(7);
        for (let j = 0; j < 7; j++) grid[i][j] = 0;
    }
}
function checkWin() {
    for (let row = 0; row <= rows; row++) {
        for (let column = 0; column <= columns; column++) {
            let player = grid[row][column];
            if (!player) continue;
            if (
                column + 3 <= columns &&
                player == grid[row][column + 1] &&
                player == grid[row][column + 2] &&
                player == grid[row][column + 3]
            ) {
                return player;
            }
            if (
                row + 3 <= rows &&
                player == grid[row + 1][column] &&
                player == grid[row + 2][column] &&
                player == grid[row + 3][column]
            ) {
                return player;
            }
            if (
                column + 3 <= columns &&
                row + 3 <= rows &&
                player == grid[row + 1][column + 1] &&
                player == grid[row + 2][column + 2] &&
                player == grid[row + 3][column + 3]
            ) {
                return player;
            }
            if (
                column - 3 >= 0 &&
                row + 3 <= rows &&
                player == grid[row + 1][column - 1] &&
                player == grid[row + 2][column - 2] &&
                player == grid[row + 3][column - 3]
            ) {
                return player;
            }
        }
    }
    return;
}

function placeItem(column, playerID) {
    if (column >= 0 && column <= columns){
        for (let i = 5; i > -1; i--) {
            if (!grid[i][column]) return (grid[i][column] = playerID);
        }
    }
    console.log("Input is invalid!");
    const userAnswer = prompt(
        `Player ${playerID}, please choose another column: `
    );
    placeItem(userAnswer,playerID);
}
function display() {
    for (let i = 0; i < 6; i++) {
        let line = "";
        for (let j = 0; j < 7; j++){
            switc
            line += grid[i][j].toString();
        } 
        console.log(line);
    }
    console.log("\n");
}
function checkStaleMate(){
    for(let i = 0; i < 7;i++){
        if(!grid[0][i]) return false;
    }
    return true;
}
function mainGame() {
    createGrid();
    let playerTurn = 1;
    while (true) {
        const userAnswer = prompt(
            `Player ${playerTurn}, please choose the column: `
        );
        placeItem(parseInt(userAnswer), playerTurn)
        display();
        if (checkWin() != null) {
            console.log(`Player ${playerTurn} has won`);
            const exitPrompt = prompt(`Would you like to play again? `);
            if (!String(exitPrompt).toLowerCase().includes("y")) break;
            else mainGame();
        }
        if(checkStaleMate()){
            console.log("Stale Mate!");
            const exitPrompt = prompt(`Would you like to play again? `);
            if (!String(exitPrompt).toLowerCase().includes("y")) break;
            else mainGame();
        }
        if (playerTurn == 1) playerTurn = 2;
        else playerTurn = 1;
    }
}
mainGame();

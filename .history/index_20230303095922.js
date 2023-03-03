// function display()
const rows = 6
const columns = 7;
let grid = new Array(columns);
function createGrid() {
    for (let i = 0; i < 6; i++) {
        grid[i] = new Array(7);
        for (let j = 0; j < 7; j++) grid[i][j] = 0;
    }
}
function checkWin(playerID){
    for(let row = rows - 1; row > -1; row--){
        for(let column = 0; column < columns; column++){

        }
    }
    for (let r = 0; r < 6; r++) { // iterate rows, bottom to top
        for (let c = 0; c < 7; c++) { // iterate columns, left to right
            let player = board[r][c];
            if (player == EMPTY_SLOT)
                continue; // don't check empty slots

            if (c + 3 < WIDTH &&
                player == board[r][c+1] && // look right
                player == board[r][c+2] &&
                player == board[r][c+3])
                return player;
            if (r + 3 < HEIGHT) {
                if (player == board[r+1][c] && // look up
                    player == board[r+2][c] &&
                    player == board[r+3][c])
                    return player;
                if (c + 3 < WIDTH &&
                    player == board[r+1][c+1] && // look up & right
                    player == board[r+2][c+2] &&
                    player == board[r+3][c+3])
                    return player;
                if (c - 3 >= 0 &&
                    player == board[r+1][c-1] && // look up & left
                    player == board[r+2][c-2] &&
                    player == board[r+3][c-3])
                    return player;
            }
        }
    }
    return EMPTY_SLOT; // no winner found
}
function placeItem(column, playerID) {
    for (let i = 5; i > -1; i--) {
        if (!grid[i][column]) grid[i][column] = playerID;
    }
}
function display() {
    console.log(grid);
}
createGrid();
placeItem(3, 1);
placeItem(3, 1);
display();

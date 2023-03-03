// function display()
const rows = 5;
const columns = 6;
let grid = new Array(columns);
function createGrid() {
    for (let i = 0; i < 6; i++) {
        grid[i] = new Array(7);
        for (let j = 0; j < 7; j++) grid[i][j] = 0;
    }
}
function checkWin() {
    for (let row = rows; row > -1; row--) {
        for (let column = 0; column <= columns; column++) {
            let player = grid[row][column];
            console.log(player)
            console.log(row +" "+ column + 1)
            console.log(row +" "+ column + 1)
            console.log(grid[row+3][column + 3])

            if (!player) continue;
            if (
                column + 3 < columns &&
                player == grid[row][column + 1] &&
                player == grid[row][column + 2] &&
                player == grid[row][column + 3]
            ) {
                return player;
            }
            if (
                row + 3 < rows &&
                player == grid[row + 1][column] &&
                player == grid[row + 2][column] &&
                player == grid[row + 3][column]
            ) {
                return player;
            }
            if (
                column + 3 <= columns &&
                player == grid[row + 1][column + 1] &&
                player == grid[row + 2][column + 2] &&
                player == grid[row + 3][column + 3]
            ) {
                return player;
            }
            if (
                column - 3 >= 0 &&
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
    for (let i = 5; i > -1; i--) {
        if (!grid[i][column]) return (grid[i][column] = playerID);
    }
}
function display() {
    for (let i = 0; i < 6; i++) {
        let line ="";
        for (let j = 0; j < 7; j++) line += grid[i][j].toString()
        console.log(line);
    }  
}
createGrid();
placeItem(1, 2);
placeItem(2, 1);
placeItem(2, 2);
placeItem(3, 1);
placeItem(3, 1);
placeItem(3, 2);
placeItem(4, 1);
placeItem(4, 1);
placeItem(4, 1);
placeItem(4, 2);
display();
console.log(checkWin());

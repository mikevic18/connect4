// function display()
let grid = new Array(7);
function createGrid() {
    for (let i = 0; i < 6; i++) {
        grid[i] = new Array(7);
        for (let j = 0; j < 7; j++) grid[i][j] = 0;
    }
}
fu
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

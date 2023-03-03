// function display()
let grid = new Array(7);
function createGrid() {
        for (let i = 0; i < 6; i++) grid[i] = new Array(7);
}
function placeItem(column,playerID) {
    for(let i = 6; i>-1; i--){
        if(!grid[column][i]) grid[i][column] = playerID;
    }
}
function display(){
    console.log(grid);
}
createGrid()

display()
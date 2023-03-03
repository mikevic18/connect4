const { checkStaleMate, placeItem, createGrid } = require("./connectGame.js");
let currentPlayer = 1;
let gameOver = false;
let cells = document.querySelectorAll(".cells");
cells.addEventListener("click", () => {
    if(!gameOver && !cells.classList("red") && !cells.classList.contains("yellow")){
        let column = ce.index
    }
})
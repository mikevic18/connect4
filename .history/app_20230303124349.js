const { checkStaleMate, placeItem, createGrid } = require("./connectGame.js");
let currentPlayer = 1;
let gameOver = false;
let cells = document.querySelectorAll(".cells");
cells.addEve
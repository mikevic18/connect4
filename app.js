let grid = new Array();
let board = document.getElementById("game-grid");
let currentCol;
let currentRow;
let currentPlayer;
let player1Wins = 0;
let player2Wins = 0;
let id = 1;
newGame();

function newGame() {
    document.getElementById("player1Data").innerHTML=player1Wins;
    document.getElementById("player2Data").innerHTML=player2Wins;
    prepareField();
    initializeNewPiece(Math.floor(Math.random() * 2) + 1);
}

function checkForVictory(row, col) {
    if (getAdj(row, col, 0, 1) + getAdj(row, col, 0, -1) > 2) return true;
    if (getAdj(row, col, 1, 0) > 2) return true;
    if (getAdj(row, col, -1, 1) + getAdj(row, col, 1, -1) > 2) return true;
    if (getAdj(row, col, 1, 1) + getAdj(row, col, -1, -1) > 2) return true;
    return false;
}

function getAdj(row, col, row_inc, col_inc) {
    if (cellVal(row, col) == cellVal(row + row_inc, col + col_inc))
        return 1 + getAdj(row + row_inc, col + col_inc, row_inc, col_inc);
    else return 0;
}

function cellVal(row, col) {
    if (grid[row] == undefined || grid[row][col] == undefined) return -1;
    else {
        return grid[row][col];
    }
}

function firstFreeRow(col, player) {
    for (var i = 0; i < 6; i++) {
        if (grid[i][col] != 0) {
            break;
        }
    }
    grid[i - 1][col] = player;
    return i - 1;
}

function possibleColumns() {
    var moves_array = new Array();
    for (var i = 0; i < 7; i++) {
        if (grid[0][i] == 0) {
            moves_array.push(i);
        }
    }
    return moves_array;
}

function piece(player) {
    this.player = player;
    this.color = player == 1 ? "red" : "yellow";
    this.id = id.toString();
    id++;

    this.addToScene = function () {
        board.innerHTML +=
            '<div id="d' +
            this.id +
            '" class="piece ' +
            this.color +
            '"></div>';
    };

    var $this = this;
    document.onmousemove = function (evt) {
        currentCol = Math.floor((evt.clientX - board.offsetLeft) / 60);
        if (currentCol < 0) currentCol = 0;
        if (currentCol > 6) currentCol = 6;
        document.getElementById("d" + $this.id).style.left =
            14 + 60 * currentCol + "px";
        document.getElementById("d" + $this.id).style.top = "-55px";
    };
    document.onload = function (evt) {
        currentCol = Math.floor((evt.clientX - board.offsetLeft) / 60);
        if (currentCol < 0) currentCol = 0;
        if (currentCol > 6) currentCol = 6;
        document.getElementById("d" + $this.id).style.left =
            14 + 60 * currentCol + "px";
        document.getElementById("d" + $this.id).style.top = "-55px";
    };

    document.onclick = function (evt) {
        if (possibleColumns().indexOf(currentCol) != -1)
            dropDisc($this.id, $this.player);
    };
}

function dropDisc(cid, player) {
    currentRow = firstFreeRow(currentCol, player);
    movePiece(cid, 14 + currentRow * 60);
    currentPlayer = player;
    checkForMoveVictory();
}

function checkForMoveVictory() {
    if (!checkForVictory(currentRow, currentCol))
        initializeNewPiece(3 - currentPlayer);
    else {
        let determineWinner = currentPlayer == 2 ? "Player 2" : "Player 1";
        initializeNewPiece(3 - currentPlayer);
        if(currentPlayer == 1) player1Wins++;
        else player2Wins++;
        alert(determineWinner + " wins!");
        board.innerHTML = "";
        newGame();
    }
}

function initializeNewPiece(player) {
    currentPlayer = player;
    let playerPiece = new piece(player);
    playerPiece.addToScene();
}

function prepareField() {
    grid = new Array();
    for (var i = 0; i < 6; i++) {
        grid[i] = new Array();
        for (var j = 0; j < 7; j++) grid[i].push(0);
    }
}

function movePiece(who, where) {
    document.getElementById("d" + who).style.top = where + "px";
}

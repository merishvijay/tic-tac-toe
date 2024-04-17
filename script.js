
// let currentPlayer="X";

// let allGrid=[" ", " ", " ", " ", " ", " ", " ", " ", " "];


// function Winner()
// {

//     const combinations=
//     [
//         [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [1,4,8], [2,4,6] 
//     ];
    
//     for( let i of combinations)
//     {
//         const [a,b,c] =i;
//         if(allGrid[a] && allGrid[a]===allGrid[b] && allGrid[a]===allGrid[c])
//         {
//             return true;
//         }

//     }

//     return false;

// }

// function gameDraw()
// {
//     return allGrid.every(griditem => griditem != "");
// }

// document.querySelectorAll('.griditem').forEach(griditem => {
//     griditem.addEventListener('click', clickGrid)
// });


// function clickGrid()
// {
//     const gridIndex=this.dataset.index;
//     handleMove(gridIndex);
// }



// function handleMove(gridIndex) {
//     if (allGrid[gridIndex] === '') { // Check if cell is empty
//         allGrid[gridIndex] = currentPlayer;
//         console.log(allGrid[gridIndex]);
        // renderGrid();
        // if (Winner()) {
        //     showMessage(currentPlayer + " wins!");
        //     disableGrid();
        // } else if (gameDraw()) {
        //     showMessage("It's a draw!");
        //     disableGrid();
        // } else {
        //     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // }
//     }
// }



// function showMessage(message) {
//     document.getElementById('message').textContent = message;
// }


// function renderGrid() {
//     const cells = document.querySelectorAll('.griditem');
//     cells.forEach((griditem, index) => {
//         griditem.textContent = allGrid[index];
//     });
// }


// function disableGrid() {
//     document.querySelectorAll('.griditem').forEach(griditem => {
//         griditem.removeEventListener('click', clickGrid);
//     });
// }





let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', '']; 



function handleMove(cellIndex) {
    if (board[cellIndex] === '') { 
        
        board[cellIndex] = currentPlayer;
        renderBoard();
        if (checkWinner()) {
            showMessage(currentPlayer + " wins!");
            disableBoard();
        } else if (checkDraw()) {
            showMessage("It's a draw!");
            disableBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}



function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]              
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}


function checkDraw() {
    return board.every(cell => cell !== '');
}


function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}


function showMessage(message) {
    document.getElementById('message').textContent = message;
}


function disableBoard() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.removeEventListener('click', cellClickHandler);
    });
}


function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    renderBoard();
    showMessage('');
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', cellClickHandler);
    });
}


function cellClickHandler() {
    const cellIndex = this.dataset.index;
    handleMove(cellIndex);
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', cellClickHandler);
});

document.getElementById('reset-btn').addEventListener('click', resetGame);


renderBoard();

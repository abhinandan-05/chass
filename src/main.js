import "./style.css";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'

const gameBoard = document.querySelector("#gameboard");

const playerDisplay = document.querySelector("#player");

const infoDisplay = document.querySelector("#info-display");

const width = 8;

const startPieces = [
  rook, knight, bishop, queen, king, bishop, knight, rook, 
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  '', '', '', '', '', '', '', '',
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  rook, knight, bishop, queen, king, bishop, knight, rook,
];

function createBoard() {
  startPieces.forEach((startPieces) => {
    const square = document.createElement(div);
    square.classList.add('square');
    square.classList.add('beige');
    gameBoard.append(square);
  })
}

createBoard();
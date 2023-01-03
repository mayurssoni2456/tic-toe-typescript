import Game from "./game";
import Player from "./player";
import Board from "./board";
import { PlayingPieceX } from "./PlayingPieceX";
import { PlayingPieceO } from "./PlayingPieceO";

// step 1 
// create Piece and assign to player

const crossPiece = new PlayingPieceX();
const p1 = new Player("abc",crossPiece);

const zeroPiece = new PlayingPieceO();
const p2 = new Player("abc",zeroPiece);

// step 2 
// create board and add players 
const board = new Board();

// board.printBoard();
const game = new Game(p1, p2, board);

game.board.addPiece(1,0,new PlayingPieceX());
game.board.addPiece(1,1,new PlayingPieceX());
game.board.addPiece(1,2,new PlayingPieceX());

board.printBoard();
console.log(game.checkWinner(1,0, crossPiece));
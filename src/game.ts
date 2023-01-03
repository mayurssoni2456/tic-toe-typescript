
import  Board  from "./board";
import { Pattern } from "./pattern.type";
import Player from "./player";
import PlayingPiece from "./playingPiece";

export type GameState = "STARTED" | "END_WINNER" | "END_DRAW"
const size = 3;

export default class Game {
    player1: Player
    player2: Player
    board: Board

    constructor (player1: Player, player2: Player, board: Board) {
        this.board = board;
        this.player1 = player1;
        this.player2 = player2;
    }  

    checkWinner(row: number, col: number, piece: PlayingPiece) {
        let rowMatch = true;
        let colMatch = true;
        let board = this.board.gameBoard;

        for(let i = 0; i<size; i++) {
            if(board[row][i] === null || board[row][i].pieceType !=piece.pieceType) {
                rowMatch = false;
            }
        }

        for(let i = 0; i<size; i++) {
            if(board[i][col] === null || board[i][col].pieceType !=piece.pieceType) {
                colMatch = false;
            }
        }

        return rowMatch || colMatch;
    }
}
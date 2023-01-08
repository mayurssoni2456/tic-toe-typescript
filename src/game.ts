
import  Board  from "./board";
import { Pattern } from "./pattern.type";
import Player from "./player";
import PlayingPiece from "./playingPiece";

export enum GameState {
    "INPROGRESS",
    "WIN",
    "DRAW"
} 
const size = 3;

export default class Game {
    player1: Player
    player2: Player
    board: Board
    currentGameState: GameState;
    private _activePlayer: Player;
    turn: boolean; // false = player 1 and true = player2
    private _numberOfMoves: number = size * size;
    row:[number, number, number];
    col:[number, number, number];
    diag:number = 0;
    adiag:number = 0;

    constructor (player1: Player, player2: Player, board: Board) {
        this.initGame(player1, player2, board)

    }  

    initGame(player1: Player, player2: Player, board: Board) {
        this.board = board;
        this.player1 = player1;
        this.player2 = player2;
        this.row = [0,0,0]; this.col = [0,0,0];
        this.currentGameState = GameState.INPROGRESS;
        this.turn = false;
    }
    public get activePlayer() {
        return this.turn ? this.player2 : this.player1;
    }

    public get numberOfMoves() {
        return this._numberOfMoves;
    }


    move(row: number, col: number, piece: PlayingPiece) {

        const isSuccess = this.board.addPiece(row,col, piece);
        if(isSuccess) {
            this._numberOfMoves -= 1;

            this.updateMovesCounter(row,col);
            this.checkWinnerBoard(row, col);
            return isSuccess;
        }
        console.log("Incorrect position - try again") 
    }

    isAntiDiaognal(r: number, c: number) {
        return r + c == size - 1;
    }

    isDiaognal(r: number, c: number) {
        return r===c;
    }

    updateMovesCounter(r: number, c: number) {
        let inc = 1;
        
        if(this.activePlayer.piece.pieceType === Pattern.O) {
            inc = -1;
        }

        this.row[r] += inc;
        this.col[c] += inc;
 
        if(this.isDiaognal(r,c)) {
            this.diag += inc;
        }
        
        if(this.isAntiDiaognal(r,c)) {
            this.adiag += inc;
        }
    }

    checkWinnerBoard(r: number, c: number) {

        if(this.row[r] === size || this.row[r] === -size) {
            this.currentGameState = GameState.WIN;
        } else if(this.col[c] === size || this.col[c] === -size) {
            this.currentGameState = GameState.WIN;
        } else if(this.isDiaognal(r,c) && (this.diag === size || this.diag === -size)) {
            this.currentGameState = GameState.WIN;;
        } else if(this.isAntiDiaognal(r,c) && (this.adiag === size || this.adiag === -size)) {
              this.currentGameState = GameState.WIN;;
        } else {
            this.turn = !this.turn;
            this.currentGameState = GameState.INPROGRESS;
        }

        if(this._numberOfMoves === 0) {
            this.currentGameState = GameState.DRAW;
        }
         
    }
}
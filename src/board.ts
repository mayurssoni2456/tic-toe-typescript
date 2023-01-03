import { Pattern } from "./pattern.type";
import PlayingPiece from "./playingPiece";
import { PlayingPieceX } from "./PlayingPieceX";

const size = 3;

export default class Board {
    gameBoard:Array<Array<PlayingPiece>>;

    constructor() {
        this.gameBoard = [];

        for (let i = 0; i < size; i++) {
            this.gameBoard.push(new Array(size).fill(null))
        }
    }

    printBoard() {
        for(let i = 0; i<3; i++) {
            for(let j = 0; j<3; j++) {
                if(this.gameBoard[i][j] != null) {
                    console.log(`${i} ${j} - ${this.gameBoard[i][j].pieceType}  |`);
                } else {
                    console.log("   ");
                }
                // console.log(" | ");
            }
            console.log("\n");
        }
    }
    
    addPiece(row: number, col: number, playingPiece: PlayingPiece): boolean {
        if(this.gameBoard[row][col] != null) {
            return false;
        }
        this.gameBoard[row][col] = playingPiece;
        return true;
    }
}
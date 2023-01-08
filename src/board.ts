import PlayingPiece from "./playingPiece";

export default class Board {
    size: number;
    gameBoard:PlayingPiece[][] = [];
 

    constructor(size: number) {
        this.size = size;
        // harcode 3 x 3 for now
        this.gameBoard = [[null,null,null],[null,null,null],[null,null,null]];
        console.log(`board ${this.gameBoard}`);

    }
    
    addPiece(r: number, c: number, playingPiece: PlayingPiece): boolean {
        console.log("gameboard ", this.gameBoard);

        if (this.gameBoard[r][c] == null) {
            this.gameBoard[r][c] = playingPiece;
            console.log("gameboard ", this.gameBoard);
            return true;
        }

        return false;
    }
}
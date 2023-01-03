
import  Board  from "./board";
import Player from "./player";

export type GameState = "STARTED" | "END_WINNER" | "END_DRAW"

export default class Game {
    player1: Player
    player2: Player
    board: Board
    turn = 0
    state: GameState = "STARTED"

    constructor (player1: Player, player2: Player, board: Board) {
        this.board = board;
        this.player1 = player1;
        this.player2 = player2;
        console.log(this.board.createRows());
    }

}
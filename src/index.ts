import Game, {GameState } from "./game";
import Player from "./player";
import Board from "./board";

enum Piece {
    X = "X",
    O = "O"
}

const board = new Board();
const p1 = new Player("abc",Piece.X)
const p2 = new Player("def",Piece.O)
const game = new Game(p1, p2, board);

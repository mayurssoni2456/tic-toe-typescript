
import { createInterface } from "readline";

import Game, { GameState } from "./game";
import Player from "./player";
import Board from "./board";
import { PlayingPieceX } from "./PlayingPieceX";
import { PlayingPieceO } from "./PlayingPieceO";

let r2 = createInterface({
   input: process.stdin,
   output: process.stdout
});

  const crossPiece = new PlayingPieceX();
  const p1 = new Player("Mayur",crossPiece);
  
  const zeroPiece = new PlayingPieceO();
  const p2 = new Player("Aayush",zeroPiece);
  
  const board = new Board(3);
  const game = new Game(p1, p2, board);
  

playGame();

function playGame() {    
    let activePlayer = game.activePlayer;
    console.log("Game Status - Number of moves",game.numberOfMoves)
    r2.question(`${activePlayer.name} your turn ${activePlayer.piece.pieceType}} enter row and col e.g. 10 or 00 \n Enter: `, (ans => {

        const input = ans.split("");
        if(input.length<=2) {
            game.move(Number(input[0]), Number(input[1]), activePlayer.piece);

   
            if (game.currentGameState === GameState.INPROGRESS) {
                playGame();
            } else if(game.currentGameState === GameState.WIN) {
                console.log(`Winner ${game.activePlayer.name}`)
            }
            else if(game.currentGameState === GameState.DRAW) {
                console.log(`Draw`)
            }    
        } else {
            console.log("invalid move - try again")
            playGame();
        }
    }));
}
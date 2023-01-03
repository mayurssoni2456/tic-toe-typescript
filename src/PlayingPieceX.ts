import { Pattern } from "./pattern.type";
import PlayingPiece from "./playingPiece";

export class PlayingPieceX extends PlayingPiece {
    constructor() {
        super(Pattern.X);
    }
}
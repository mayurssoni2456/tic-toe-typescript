import { Pattern } from "./pattern.type";
import PlayingPiece from "./playingPiece";

export class PlayingPieceO extends PlayingPiece {
    constructor() {
        super(Pattern.O);
    }
}
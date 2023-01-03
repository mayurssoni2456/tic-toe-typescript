import { Pattern } from "./pattern.type"

export default class PlayingPiece {
    pieceType: Pattern;

    constructor(pieceType: Pattern) {
        this.pieceType = pieceType;
    }
}
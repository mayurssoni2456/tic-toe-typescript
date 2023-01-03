
/* 
Player playing with which piece?

RelationShip = Player has-A Playingpiece

*/

import PlayingPiece from "./playingPiece";

export default class Player {
    name: string;
    piece: PlayingPiece;

    constructor(name: string, piece: PlayingPiece) {
        this.name = name;
        this.piece = piece;
    }
}
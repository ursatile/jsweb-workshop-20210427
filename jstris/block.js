import { Cell } from "./cell";

export class Block {

    get cells() {
        return this._cells;
    }

    get name() {
        return "test-block";
    }

    isOkToMove(direction) {
        return this._cells.every(c => this._game.isValidAndEmpty(c.move(direction)));
    }

    move(direction) {
        if (this.isOkToMove(direction)) {
            this._cells = this._cells.map(c => c.move(direction));
        }
    }

    constructor(rowIndex, colIndex, game) {
        this._cells = new Array();
        this._cells.push(new Cell(0+rowIndex, 0+colIndex));
        this._cells.push(new Cell(1+rowIndex, 0+colIndex));
        this._game = game;
    }
}
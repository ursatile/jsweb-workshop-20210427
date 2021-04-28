import { Cell } from "./cell";

export class Block {

    get cells() {
        return this._cells;
    }

    get name() {
        return "test-block";
    }

    move(colOffset) {
        this._cells.forEach(c => {
            c.colIndex += colOffset;
        });
    }

    constructor(rowIndex, colIndex) {
        this._cells = new Array();
        this._cells.push(new Cell(0+rowIndex, 0+colIndex));
        this._cells.push(new Cell(1+rowIndex, 0+colIndex));
    }
}
import { Block } from "./block";
import { Cell } from "./cell";

export class Game {
    get allCells() {
        return this._rows.flat();
    }

    get cells() {
        return this._rows;
    }

    get rows() {
        return this._rows;
    }

    get blocks() {
        return this._blocks;
    }

    get colCount() {
        return this._colCount;
    }

    isValidAndEmpty(cell) {
        if (cell.rowIndex < 0) return(false);
        if (cell.colIndex < 0) return(false);
        if (cell.colIndex >= this.colCount) return(false);
        if (cell.rowIndex >= this.rowCount) return(false);
        return(true);
    }

    addBlock(rowIndex, colIndex) {
        this.currentblock = new Block(rowIndex, colIndex, this);
        this._blocks.push(this.currentblock);
    }

    moveBlock(direction) {
        this.currentblock.move(direction);
    }

    constructor(rowCount, colCount) {
        this._rowCount = rowCount;
        this._colCount = colCount;
        this._blocks = new Array();
        let rows = new Array();
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
            let cols = new Array(colCount)
                .fill(0)
                .map((_, colIndex) => new Cell(rowIndex, colIndex));
            rows.push(cols);
        }
        this._rows = rows;
    }
}
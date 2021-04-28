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

    addBlock(rowIndex, colIndex) {
        this.currentblock = new Block(rowIndex, colIndex);
        this._blocks.push(this.currentblock);
    }

    moveBlock(colOffset) {
        this.currentblock.move(colOffset);
    }

    constructor(rowCount, colCount) {
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
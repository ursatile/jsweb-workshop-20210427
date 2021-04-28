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
        return this._settledBlocks.concat(this._currentBlock);
    }

    get colCount() {
        return this._colCount;
    }
    
    get rowCount() {
        return this._rowCount;
    }

    isValidAndEmpty(cell) {
        if (cell.rowIndex < 0) return(false);
        if (cell.colIndex < 0) return(false);
        if (cell.colIndex >= this.colCount) return(false);
        if (cell.rowIndex >= this.rowCount) return(false);
        if (this._settledBlocks.some(block => block.isUsingCell(cell))) return(false);
        return(true);
    }

    isAnyBlockOccupying(cell) {
        return this._settledBlocks.some(block => block.isUsingCell(cell));
    }

    isRowFullOfBlocks(row) {
        return row.every(cell => this.isAnyBlockOccupying(cell));
    }

    findFullRows() {
        return this.rows.filter(row => this.isRowFullOfBlocks(row));
    }

    addBlock(rowIndex, colIndex) {
        rowIndex = rowIndex || 0;
        colIndex = colIndex || 2;

        if (this._currentBlock) this._settledBlocks.push(this._currentBlock);

        this.findFullRows().forEach(fullRow => {
            this.blocks.forEach(block => block.removeCells(fullRow));
            this.blocks.forEach(block => block.move("down"));
        });

        this._currentBlock = new Block(rowIndex, colIndex, this);        
    }

    moveBlock(direction) {
        let moved = this._currentBlock.move(direction);
        if (!moved && direction == "down") {
            this.addBlock()
        }
    }

    constructor(rowCount, colCount) {
        this._rowCount = rowCount;
        this._colCount = colCount;
        this._settledBlocks = new Array();
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
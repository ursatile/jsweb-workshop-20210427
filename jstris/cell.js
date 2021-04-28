export class Cell {

    constructor(rowIndex, colIndex) {
        this._rowIndex = rowIndex;
        this._colIndex = colIndex;
    }
    get rowIndex() {
        return this._rowIndex;
    }

    get colIndex() {
        return this._colIndex;
    }

    get key() {
        return `${this._rowIndex}-${this.colIndex}`;
    }

    move(direction) {
        switch(direction) {
            case 'left': return new Cell(this.rowIndex, this.colIndex-1);
            case 'right': return new Cell(this.rowIndex, this.colIndex+1);
            case 'down': return new Cell(this.rowIndex+1, this.colIndex);
        }
    }
}
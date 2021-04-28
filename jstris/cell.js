export class Cell {

    constructor(rowIndex, colIndex) {
        this._rowIndex = rowIndex;
        this._colIndex = colIndex;
    }
    get rowIndex() {
        return this._rowIndex;
    }

    set rowIndex(value) { 
        this._rowIndex = value;
    }

    get colIndex() {
        return this._colIndex;
    }

    set colIndex(value) {
        this._colIndex = value;
    }

    get key() {
        return `${this._rowIndex}-${this.colIndex}`;
    }

}
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

}
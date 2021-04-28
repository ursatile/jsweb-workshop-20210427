import { Grid } from '../grid.js';

describe('new game grid', () => {
    test('has correct number of rows', () => {
        let grid = new Grid(20, 10);
        expect(grid.rows.length).toBe(20);
    });
    test('has correct number of cells', () => {
        let grid = new Grid(20, 10);
        expect(grid.allCells.length).toBe(200);
    });
    test('top left cell has correct coordinates', () => {
        let grid = new Grid(20, 10);
        let cell = grid.cells[0][0];
        expect(cell.rowIndex).toBe(0);
        expect(cell.colIndex).toBe(0);
    });
    test('bottom right cell has correct coordinates', () => {
        let grid = new Grid(20, 10);
        let cell = grid.cells[19][9];
        expect(cell.rowIndex).toBe(19);
        expect(cell.colIndex).toBe(9);
    });
});
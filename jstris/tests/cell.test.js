import { Cell } from '../cell.js';

test('cell has correct coordinates', () => {
    let cell = new Cell(2,3);
    expect(cell.rowIndex).toBe(2);
    expect(cell.colIndex).toBe(3);
});
import Oblong from './rectangle.js';

export default function Flag(canvasId, x, y) {
    Oblong(canvasId, x, y, 60, 15, 'black');
    Oblong(canvasId, x, y+15, 60, 15, 'red');
    Oblong(canvasId, x, y+30, 60, 15, 'gold');
}
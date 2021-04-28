import Rectangle from './rectangle.js';

export function ArmenianFlag(canvasId, x,y) {
    Rectangle(canvasId, x, y, 60, 15, '#b80020');
    Rectangle(canvasId, x, y+15, 60, 15, '#3858a0');
    Rectangle(canvasId, x, y+30, 60, 15, '#e0a850');
}

export function ColombianFlag(canvasId, x, y) {
    Rectangle(canvasId, x, y, 60, 20, 'yellow');
    Rectangle(canvasId, x, y+20, 60, 12, 'blue');
    Rectangle(canvasId, x, y+32, 60, 12, 'red');
}


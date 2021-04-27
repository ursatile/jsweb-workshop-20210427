function Flag(canvasId, x, y) {
    Rectangle(canvasId, x, y, 60, 15, 'black');
    Rectangle(canvasId, x, y+15, 60, 15, 'red');
    Rectangle(canvasId, x, y+30, 60, 15, 'gold');
}
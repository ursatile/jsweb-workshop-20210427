import GermanFlag from './flag-de.js';
import UkrainianFlag from './flag-ua.js';

import { ColombianFlag as co, ArmenianFlag as am } from './flag-library.js';

document.getElementById('canvas').addEventListener("click", drawShape);
function drawShape(e) {
    console.log(window.shape);
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    switch (window.shape) {
        case 'flag-ua': UkrainianFlag('canvas', x, y); break;
        case 'flag-am': am('canvas', x, y); break;
        case 'flag-co': co('canvas', x, y); break;
        case 'flag-de': GermanFlag('canvas', x, y); break;
    }
}

document.querySelectorAll("input[type=radio]").forEach(input =>
    input.addEventListener("change", evt => window.shape = input.value)
);
window.shape = 'flag-de';

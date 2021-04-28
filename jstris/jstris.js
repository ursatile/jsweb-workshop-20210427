import { Game } from './game.js';
import Renderer from './renderer.js';

class TetrisGameElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.renderer = new Renderer(this.shadowRoot);
    }

    connectedCallback() {


        let game = new Game(20, 10);
        game.addBlock(2, 5);
        this.renderer.draw(game);



    }

}

customElements.define("tetris-game", TetrisGameElement);
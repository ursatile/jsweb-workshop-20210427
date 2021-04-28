import { Game } from './game.js';
import Renderer from './renderer.js';

class TetrisGameElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.renderer = new Renderer(this.shadowRoot);
    }

    connectedCallback() {
        this.game = new Game(20, 10);
        this.game.addBlock(2, 5);
        this.renderer.draw(this.game);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
    }

    handleKeydown(event) {
        switch (event.code) {
            case "ArrowLeft": this.game.moveBlock("left"); break;
            case "ArrowRight": this.game.moveBlock("right"); break;
            default: return;
        }
        event.preventDefault();
        this.renderer.update(this.game);
    }

}

customElements.define("tetris-game", TetrisGameElement);
import { Game } from './game.js';
import Renderer from './renderer.js';

class TetrisGameElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.renderer = new Renderer(this.shadowRoot);
    }

    connectedCallback() {
        this.game = new Game(10, 4);
        this.game.addBlock(2, 2);
        this.renderer.draw(this.game);
        document.addEventListener("keydown", this.handleKeydown.bind(this));
        // window.setInterval(this.tick.bind(this), 600);
    }

    tick() {
        this.game.moveBlock("down");
        this.renderer.update(this.game);
    }

    handleKeydown(event) {
        switch (event.code) {
            case "ArrowLeft": this.game.moveBlock("left"); break;
            case "ArrowRight": this.game.moveBlock("right"); break;
            case "ArrowDown": this.game.moveBlock("down"); break;
            default: return;
        }
        event.preventDefault();
        this.renderer.update(this.game);
    }

}

customElements.define("tetris-game", TetrisGameElement);
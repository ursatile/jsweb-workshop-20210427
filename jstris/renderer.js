import * as html from './html.js';

export default class Renderer {
    constructor(shadowRoot) {
        this._shadowRoot = shadowRoot;
    }
    draw(game) {
        
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "jstris.css");
        this._shadowRoot.appendChild(link);

        game.rows.forEach((row, rowIndex) => {
            let div = html.element('div');
            row.forEach((cell, colIndex) => {
                let span = html.element('span', {'id': `span-${cell.key}`}, '');
                div.appendChild(span);
            });
            this._shadowRoot.appendChild(div);
        });    
        this.update(game);           
    }
    update(game) {
        this._shadowRoot.querySelectorAll("span").forEach(span => 
            span.className = ""
        );
        game.blocks.forEach(block => {
            console.log(block);
            block.cells.forEach(cell => {                
              let span = this._shadowRoot.getElementById(`span-${cell.key}`);
              span.className = block.name;
            });
        })

    }
}
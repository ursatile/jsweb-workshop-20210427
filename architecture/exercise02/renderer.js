import * as html from './html.js';

export default class Renderer {
    constructor(shadowRoot) {
        this.shadowRoot = shadowRoot;
    }

    render(counterEngine) {
        const cssLink = html.element('link', { "href":"counter.css", "rel":"stylesheet" });
        this.shadowRoot.appendChild(cssLink);

        let wrapper = html.element('div', { "class" : "counter-wrapper"});

        this.incrementButton = html.element('button', {}, '▲');
        this.decrementButton = html.element('button', {}, '▼');
        
        this.span = html.element('span', { "id" : "counter" }, counterEngine.value);
        
        let counter = html.element('div', {"class": "counter"});
        counter.appendChild(this.span);
        wrapper.appendChild(this.decrementButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(this.incrementButton);
        this.resetButton = html.element('button', { 'id': 'reset-button' }, 'Reset');
        wrapper.appendChild(this.resetButton);
        this.shadowRoot.appendChild(wrapper);
    }

    update(counterEngine) {
        this.span.innerHTML = counterEngine.value;
    }
}
import * as html from './html.js';

export default class Renderer {

    get incrementButton() {
        return this._incrementButton;
    }
    get decrementButton() {
        return this._decrementButton;
    }
    get resetButton() {
        return this._resetButton;
    }

    constructor(shadowRoot) {
        this._shadowRoot = shadowRoot;
        this._incrementButton = html.element('button', {'id': 'increment-button'}, '▲');
        this._decrementButton = html.element('button', {}, '▼');
        this._span = html.element('span', { "id" : "counter" });
        this._resetButton = html.element('button', { 'id': 'reset-button' }, 'Reset');
    }

    render(counterEngine) {
        const cssLink = html.element('link', { "href":"counter.css", "rel":"stylesheet" });
        this._shadowRoot.appendChild(cssLink);
        let wrapper = html.element('div', { "class" : "counter-wrapper"});
        let counter = html.element('div', {"class": "counter"});
        counter.appendChild(this._span);
        wrapper.appendChild(this._decrementButton);
        wrapper.appendChild(counter);
        wrapper.appendChild(this._incrementButton);
        wrapper.appendChild(this._resetButton);
        this._shadowRoot.appendChild(wrapper);
        this.update(counterEngine);
    }

    update(counterEngine) {
        this._span.innerText = counterEngine.value;
    }
}
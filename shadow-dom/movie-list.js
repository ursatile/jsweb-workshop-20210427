// movie-list.js
class MovieListElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <ul>
        <li>Alien</li>
        <li>Back to the Future</li>
        <li>Dirty Dancing</li>
        <li>Jumanji</li>
        <li>Zoolander</li>
        </ul>`;
    }
  }
  
  customElements.define('movie-list', MovieListElement);
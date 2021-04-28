class CssDemoElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        let h1 = document.createElement("h1");
        h1.style.color = "red";
        h1.style.borderColor = "blue";
        h1.style.borderStyle = "solid";
        h1.style.borderWidth = "1px";
        h1.style.padding = "8px";
        h1.style.borderRadius = "8px";
        h1.innerText = "Look! I'm Super Stylish!";
        this.shadowRoot.appendChild(h1);

        let h2 = document.createElement("h2");
        h2.innerText = "I'm stylish too!";
        h2.setAttribute("style", "color: green; font-size: 200%;");
        this.shadowRoot.appendChild(h2);

        let style = document.createElement("style");
        style.innerHTML = `
h3 {
    text-align: center;
    font-family: Brush Script, cursive;
    color: purple;
    text-decoration: underline;
}        
`;
        this.shadowRoot.appendChild(style);
        let h3 = document.createElement("h3");
        h3.innerText = "I want to be stylish too!";
        this.shadowRoot.appendChild(h3);


        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "css-demo.css");
        this.shadowRoot.appendChild(link);

        let h4 = document.createElement("h4");
        h4.innerText = "h4 is the most stylish because it uses external CSS!";
        this.shadowRoot.appendChild(h4);

    }

}

customElements.define("css-demo", CssDemoElement);
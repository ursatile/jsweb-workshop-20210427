class ColorPickerElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        let style = document.createElement('style');
        style.innerHTML = `button { border: 0; border-radius: 16px; padding: 8px; margin: 8px; }`;
        this.shadowRoot.appendChild(style);
        this.drawSwatches(this.shadowRoot, this);
    }

    drawSwatches(root, pickerElement) {
        let colors = ["#50c236", "#16856f", "#efc306", "#025594", "#b51f8f", "#ff6c53", "#a85642"];
        colors.forEach(color => {
            let button = document.createElement('button');
            button.style.backgroundColor = color;
            button.innerText = color;
            button.addEventListener("click", function() {
                const colorPickEvent = new CustomEvent("pick-color", 
                { detail: color }
                );
                pickerElement.dispatchEvent(colorPickEvent);
            });
            root.appendChild(button);
        })
    };

}
customElements.define("color-picker", ColorPickerElement);
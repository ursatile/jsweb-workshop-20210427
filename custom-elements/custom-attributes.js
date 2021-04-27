class HelloWorldElement extends HTMLElement {
    // constructor() {
    //     super();
    // }
    connectedCallback() {
        let person = this.getAttribute("person");
        this.paragraph = document.createElement("p");
        this.appendChild(this.paragraph);        
        this.updateGreeting(person);
    }

    updateGreeting(foo) {
        if (foo === null) {
            foo = "World"
        } else if (foo === "") {
            foo = "(empty string)";
        }
        let greeting = `Hello ${foo}`;
        if (this.paragraph) {
        this.paragraph.innerText = greeting;
        }
    }

    static get observedAttributes() { return ['person']; }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        console.log(`attributeName: ${attributeName}`);
        console.log(`oldValue: ${oldValue}`);
        console.log(`newValue: ${newValue}`);
        this.updateGreeting(newValue);
    }
}
customElements.define("hello-world", HelloWorldElement);

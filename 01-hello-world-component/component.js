class HelloWorld extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.textContent = "Hello, world";
    }
}

customElements.define("hello-world", HelloWorld);
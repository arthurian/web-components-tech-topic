class WordCount extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        let p = this.parentNode;
        let text = p.innerText || p.textContent;
        let count = text.split(/\s+/g).length;

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = `
            <style>* { color: blue; }</style>
            <span class="wordcount">Words: ${count}</span>
        `;
    }
}

customElements.define("word-count", WordCount);
class IiifViewer extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"});
        console.log("constructor");
    }

    connectedCallback() {
        console.log("connectedCallback");
        this.url = this.getAttribute("url");
        this.render();
    }

    render() {
        console.log("render");
        const url = this.url;

        const osd = document.createElement("div");
        osd.style.width = this.style.width || "800px";
        osd.style.height = this.style.height || "600px";

        const script = document.createElement("script");
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/openseadragon.min.js';
        script.addEventListener("load", function(event) {
            console.log("loaded openseadragon", event);
            // https://openseadragon.github.io/docs/
            // https://openseadragon.github.io/examples/tilesource-iiif/
            OpenSeadragon({
                element: osd,
                prefixUrl: 'https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.0.0/images/',
                preserveViewport: true,
                visibilityRatio: 1,
                minZoomLevel: 1,
                defaultZoomLevel: 1,
                sequenceMode: true,
                tileSources: [url]
            });
        });

        this.shadowRoot.appendChild(script);
        this.shadowRoot.appendChild(osd);
    }
}

customElements.define("iiif-viewer", IiifViewer);
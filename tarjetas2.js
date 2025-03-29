class Tarjeta extends HTMLElement {
    constructor(){
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        
        </style>





        <h1>${'destino'}</h1>
        `
    } 
}
customElements.define("tarjeta-hola", Tarjeta);
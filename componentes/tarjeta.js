class Cards extends HTMLElement {
    constructor() {
        super()

        async function infromacion() {
            const response = await fetch(request);
            const infocompleta = await informacion.json();
        }
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });
        this.tarjeta = HTMLElement(div)


        this.tarjeta.innerHTML = /*html*/ `

        <style>
        </style>

        <div> 
        <img src= https://forms.gle/vEZ2LBP3g7KAHLEQ6>
        <h2>${'destino'}</h2>
        <h3>${'costo'}</h3>
        <p>${'descripcion'}</p>
        <p>${'actividades'}</p>
        <p>${'disponibilidad'}</p>
        <p>${'alojamiento'}</p>
        </div>
        `
    }

}

export default Cards
customElements.define("cards-eventos", Cards);
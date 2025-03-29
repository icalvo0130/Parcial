import {informacion} from './informacion.js';

class Cards extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" });
        const info = informacion()
    }
    

    connectedCallback(){
        this.innerHTML = /*html*/ `

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


customElements.define("cards-eventos", Cards);
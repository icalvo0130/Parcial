class Cards extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback(){
        const shadow = this.attachShadow({ mode: "open" });
        this.tarjeta = HTMLElement(div)

        this.tarjeta.innerHTML = /*html*/ `
        
        
        
        `
    }


    
        'destino', 'duracion', 'costo', 'descripcion', 'actividades','imagen', 'disponibilidad', 'calificacion','alojamiento', 'guia'
    

    

}
customElements.define("cards-eventos", Cards);
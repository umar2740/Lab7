class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

class UmarWasHere extends HTMLElement {
	connectedCallback(){
		this.innerHTML = "Umar was here";
	}
}
customElements.define('x-umar', UmarWasHere)
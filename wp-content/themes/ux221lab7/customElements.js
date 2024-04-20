class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);
class TwoSided extends HTMLElement{
	connectedCallback(){
		this.innerHTML = '<a href="for_students">for students</a> <a href="for_homeowners">for homeowners</a>';
	}
}
customElements.define("x-twosided", TwoSided);
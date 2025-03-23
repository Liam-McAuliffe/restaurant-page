export class Element {
    constructor(element, classList = [], id = "", innerHTML = "") {
        this.element = document.createElement(element);
        this.element.classList.add(...classList);
        this.element.id = id;
        this.element.innerHTML = innerHTML;
    }
    getElement() {
        return this.element;
    }
}

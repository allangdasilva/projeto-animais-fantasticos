export default class Accordion {
  constructor(links) {
    this.accordionList = document.querySelectorAll(links);
    this.classActive = "ativo";
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }
  toggleAccordion(event) {
    event.target.classList.toggle(this.classActive);
    event.target.nextElementSibling.classList.toggle(this.classActive);
  }
  //adiciona eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((ele) => {
      ele.addEventListener("click", this.toggleAccordion);
    });
  }
  //iniciar função
  init() {
    if (this.accordionList.length) {
      this.addAccordionEvent();
      this.accordionList[0].classList.add(this.classActive);
      this.accordionList[0].nextElementSibling.classList.add(this.classActive);
    }
    return this;
  }
}

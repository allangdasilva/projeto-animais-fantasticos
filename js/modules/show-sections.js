export default class ShowSection {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.observador = new IntersectionObserver((sEle) => {
      sEle.forEach((ele) => {
        if (ele.isIntersecting) {
          ele.target.classList.add("ativo");
        } else {
          ele.target.classList.remove("ativo");
        }
      });
    });
  }
  observeEvent() {
    this.sections.forEach((ele) => {
      this.observador.observe(ele);
    });
  }
  init() {
    if (this.sections.length) {
      this.observeEvent();
    }
    return this;
  }
}

export default class ShowSection {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    // new IntersectionObserver monitora a visibilidade
    // de elementos na tela, ele avisa se um elemnto aparece
    // ou desaparece
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
      // (ele) é cada section, ao colocar ele no argumento
      // estou dizendo 'observe esse elemento'. observador recebendo
      // new IntersectionObserver vai virar uma classe que vai ter
      // propiedades e métodos, o método observe() vai observar aquilo
      // que você definir
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

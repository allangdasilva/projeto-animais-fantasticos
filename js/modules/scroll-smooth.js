export default class ScrollSmooth {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }
    this.scrollSmooth = this.scrollSmooth.bind(this);
  }
  scrollSmooth(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }
  addLinkEvent() {
    this.linksInternos.forEach((ele) => {
      ele.addEventListener("click", this.scrollSmooth);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}

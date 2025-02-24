export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.classActive = "ativo";
    this.activeTab = this.activeTab.bind(this);
  }
  //ativa o tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((ele) => {
      ele.classList.remove(this.classActive);
    });
    this.tabContent[index].classList.add(this.classActive);
  }
  //adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((ele, index) => {
      ele.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }
  //iniciar a função
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}

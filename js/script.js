const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
tabContent[0].classList.add("ativo");

if (tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((ele) => {
      ele.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
  tabMenu.forEach((ele, index) => {
    ele.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

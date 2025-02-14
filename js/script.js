function initTab() {
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
}
initTab();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const ativoClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    function activeAccordion(event) {
      event.target.classList.toggle(ativoClass);
      event.target.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionList.forEach((ele) => {
      ele.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSmooth() {
  const links = document.querySelectorAll('a[href^="#"]');
  if (links.length) {
    function scrollSmooth(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    links.forEach((ele) => {
      ele.addEventListener("click", scrollSmooth);
    });
  }
}
initScrollSmooth();

function initiShowSections() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const observador = new IntersectionObserver((sEle) => {
      sEle.forEach((ele) => {
        if (ele.isIntersecting) ele.target.classList.add("ativo");
        else ele.target.classList.remove("ativo");
      });
    });

    sections.forEach((ele) => {
      observador.observe(ele);
    });
  }
}
initiShowSections();

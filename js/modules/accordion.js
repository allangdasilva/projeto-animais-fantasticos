export default function initAccordion() {
  const accordionList = document.querySelectorAll("[data-faq='accordion'] dt");
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

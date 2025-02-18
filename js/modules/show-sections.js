export default function initiShowSections() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const observador = new IntersectionObserver((sEle) => {
      sEle.forEach((ele) => {
        if (ele.isIntersecting) {
          ele.target.classList.add("ativo");
        } else {
          ele.target.classList.remove("ativo");
        }
      });
    });

    sections.forEach((ele) => {
      observador.observe(ele);
    });
  }
}

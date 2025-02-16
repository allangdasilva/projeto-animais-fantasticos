export default function initScrollSmooth() {
  const links = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
  if (links.length) {
    function scrollSmooth(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const section = document.querySelector(href);
      console.log(event.target);
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

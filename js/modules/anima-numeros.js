export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");
  numeros.forEach((numero) => {
    const num = Number(numero.innerHTML);
    const icremento = Math.floor(num / 100);
    let i = 0;

    const timer = setInterval(() => {
      i = i + icremento;
      numero.innerText = i;
      if (i > num) {
        numero.innerText = num;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
}

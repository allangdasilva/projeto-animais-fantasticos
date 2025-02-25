export default class AnimaNumeros {
  constructor(numeros) {
    this.numeros = document.querySelectorAll(numeros);
  }

  // Recebe um elemento do dom, com número em seu texto
  // incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
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
  }
  // Ativa incrementar número para cada
  // número selecionado do dom
  animaNumeroEvent() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }
  init() {
    if (this.numeros.length) {
      this.animaNumeroEvent();
    }
    return this;
  }
}

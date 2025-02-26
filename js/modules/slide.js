import debounce from "./debounce.js";

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
    this.activeClass = "active";

    // criamos um evento
    this.changeEvent = new Event("changeEvent");
  }
  // transição do slide
  transition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }
  moveSlide(distX) {
    // salvo a posição de arraste(que muda constantemente) nessa
    // propiedade criada agora para passar esse valor a propiedade
    // finalPosition
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }
  updatePosition(clientX) {
    // multiplicar o valor para que o arraste fique mais rápido
    this.dist.movement = (this.dist.startX - clientX) * 1.4;

    // pega a posição final de quando soltou o mouse e
    // soma ao dist.movement fazendo com que a posição
    // seja sempre aonde você largou o clique. só que vamos
    // subtrair ao invés de somar para que o slide arraste
    // para o lado correto
    return this.dist.finalPosition - this.dist.movement;
  }
  onStart(event) {
    let moveType;
    if (event.type === "mousedown") {
      event.preventDefault();

      // pega o numero relativo aonde foi o clicado na tela
      this.dist.startX = event.clientX;

      moveType = "mousemove";
    } else {
      // pega o numero relativo aonde foi o clicado na tela
      // mas no touch, o [0] é relativo ao 'primeiro clique'
      this.dist.startX = event.changedTouches[0].clientX;

      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove);

    // transição começa em false
    this.transition(false);
  }
  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    // event.clientX é a mesma coisa do de cima, só esse vai ser atualizado
    // a cada arrastada do mouse ai a conta vai ficar assim:
    // this.dist.startX(valor estático, por exemplo 200) - clientX(valor que
    // se atualiza constantemente, se eu levar o mouse pra direita esse numero
    // aumenta e pra esquerda diminui, essa conta irá resultar no valor final)
    const finalPosition = this.updatePosition(pointerPosition);

    this.moveSlide(finalPosition);
  }
  onEnd(event) {
    const moveType = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);

    // salva a posição exata em que o mouse está
    // quando eu soltar o click do mouse na propiedade finalPosition
    this.dist.finalPosition = this.dist.movePosition;
    this.changeSlideOnEnd();

    // ao soltar a transição é ativada
    this.transition(true);
  }

  // muda o para o slide ao soltar, quando puxamos mais ou menos o
  // mouse a soma do dist.movement passa de 120 para a direita e de
  // -120 para a esquerda(algo considerável para dizer que quer arrastar
  // para tal lado). então quando soltar o mouse ja vai para o slide
  // que o usuário deseja arrastar
  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    // eventos de touch são necessários para o mobile
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  slidePosition(slide) {
    // calculo para fazer com que cada item se posicione no centro da tela
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  // retorna a posição X (baseada no centro(calculo feito em
  // slideposition())) e o elemento
  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        position: position,
        element: element,
      };
    });
  }

  // verifica a posição do slide
  slidesIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  //
  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;
    this.changeActiveClass();

    // Toda vez que o slide mudar ativa esse evento aqui para mim.
    // todas vez que o slide mudar o wrapper vai emitir esse evento
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  // adiciona a classe de ativo ao slide que estiver visível
  // agora posso estilizar baseado nisso
  changeActiveClass() {
    this.slideArray.forEach((item) => {
      item.element.classList.remove(this.activeClass);
    });
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
  }

  // passa o index correto para o changeSlide
  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }
  // passa o index correto para o changeSlide
  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  // evento para atualizar o resize(caso o usuário mude o tamanho da tela)
  onResize() {
    // setTimeout para que as configuração espere 1 segundo após o resize
    setTimeout(() => {
      // se o resize acontecer, realize essa função novamente
      // que verifica o tamanho da tela e faz o calculo
      this.slidesConfig();
      // vai tambem reposicionar o slide que está ativo
      this.changeSlide(this.index.active);
    }, 1000);
  }
  addResizeEvent() {
    window.addEventListener("resize", this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.slidesConfig();
    this.bindEvents();
    this.addSlideEvents();
    this.addResizeEvent();
    this.changeSlide(0);
    return this;
  }
}
export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);

    // criada uma novo método de bind
    this.bindControlEvents();
  }
  // adiciona os elementos que serão os botões next e prev
  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }
  // evento dos botões prev e next
  addArrowEvent() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  //cria os controles/adiciona no wrapper e retorna os controles
  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${
        index + 1
      }</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  // adiciona o evento de click aos controles passando o item e o index
  eventControl(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      this.changeSlide(index);
      this.activeControlItem();
    });

    // toda vez que eu mudar o slide esse evento será chamado
    this.wrapper.addEventListener("changeEvent", this.activeControlItem);
  }

  // passa em todos elementos do array de control
  // e adiciona a classe active
  activeControlItem() {
    this.controlArray.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.controlArray[this.index.active].classList.add(this.activeClass);
  }

  // cria 2 propiedades 'control' e 'controlArray'
  // 'controlArray' pega os children desestruturados
  // chama actvieControlItem que adiciona as classes
  // cada item do controlArray passa o argumento para eventControl
  // que lida com o evento de click
  // e o addControl por padrão é as bolinha, mas se quiser passar outro
  // elemento você pode criar e passar normalmente
  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    this.activeControlItem();
    this.controlArray.forEach((item, index) => [
      this.eventControl(item, index),
    ]);
  }

  // outro bind, muda nada
  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}

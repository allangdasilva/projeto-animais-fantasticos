(()=>{"use strict";function t(t,e,o){const i=document.documentElement,n="data-outside";function s(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{i.removeEventListener(t,s)})),o())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>{i.addEventListener(t,s)}))})),t.setAttribute(n,""))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollSmooth=this.scrollSmooth.bind(this)}scrollSmooth(t){t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollSmooth)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="smooth"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.classActive="ativo",this.toggleAccordion=this.toggleAccordion.bind(this)}toggleAccordion(t){t.target.classList.toggle(this.classActive),t.target.nextElementSibling.classList.toggle(this.classActive)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",this.toggleAccordion)}))}init(){return this.accordionList.length&&(this.addAccordionEvent(),this.accordionList[0].classList.add(this.classActive),this.accordionList[0].nextElementSibling.classList.add(this.classActive)),this}}("[data-faq='accordion'] dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.classActive="ativo",this.activeTab=this.activeTab.bind(this)}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.classActive)})),this.tabContent[t].classList.add(this.classActive)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent())}}("[data-tab='menu'] li","[data-tab='content'] section").init(),function(){const t=document.querySelectorAll("[data-anime='scroll']");if(t.length){const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?t.target.classList.add("ativo"):t.target.classList.remove("ativo")}))}));t.forEach((t=>{e.observe(t)}))}}(),function(){const t=document.querySelector('[data-modal="abrir"'),e=document.querySelector('[data-modal="fechar"'),o=document.querySelector('[data-modal="container"');if(t&&e&&o){function i(t){t.preventDefault(),o.classList.toggle("ativo")}function n(t){t.target===this&&i(t)}t.addEventListener("click",i),e.addEventListener("click",i),o.addEventListener("click",n)}}(),function(){const t=document.querySelector("[data-tooltip]");if(t){function e(t){const e=n(this);e.style.top=t.pageY+"px",e.style.left=t.pageX+"px",i.tooltipBox=e,this.addEventListener("mousemove",i),o.tooltipBox=e,o.element=this,this.addEventListener("mouseleave",o)}const o={tooltipBox:"",element:"",handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",o),this.element.removeEventListener("mousemove",i)}},i={tooltipBox:"",handleEvent(t){this.tooltipBox.style.top=t.pageY+20+"px",this.tooltipBox.style.left=t.pageX+20+"px"}};function n(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),e}t.addEventListener("mouseover",e)}}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((t=>{["touchstart","click"].forEach((o=>{t.addEventListener(o,e)}))}))}(),function(){const e=document.querySelector("[data-menu='button']"),o=document.querySelector("[data-menu='list']"),i=["click","touchstart"];if(e){function n(){o.classList.add("active"),this.classList.add("active"),t(o,i,(()=>{o.classList.remove("active"),this.classList.remove("active")}))}i.forEach((t=>{e.addEventListener(t,n)}))}}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),i=new Date,n=i.getDay(),s=i.getHours(),a=-1!==e.indexOf(n);s>=o[0]&&s<o[1]&&a&&t.classList.add("aberto")}(),async function(){try{const t=await fetch("../../animaisapi.json"),e=await t.json(),o=document.querySelector(".numeros-grid");e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)})),document.querySelectorAll("[data-numero]").forEach((t=>{const e=Number(t.innerHTML),o=Math.floor(e/100);let i=0;const n=setInterval((()=>{i+=o,t.innerText=i,i>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}))}catch(t){console.log(t)}}(),async function(){try{const t=await fetch("https://blockchain.info/ticker"),e=100/(await t.json()).BRL.buy;document.querySelector(".btc-preco").innerText=e.toFixed(4)}catch(t){console.log(t)}}()})();
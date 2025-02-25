import TabNav from "./modules/tab.js";
import Accordion from "./modules/accordion.js";
import ScrollSmooth from "./modules/scroll-smooth.js";
import initiShowSections from "./modules/show-sections.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initiDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion("[data-faq='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initiShowSections();
initiDropdownMenu();
initMenuMobile();
initFuncionamento();
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

fetchAnimais("../../animaisapi.json", ".numeros-grid");

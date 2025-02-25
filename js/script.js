import TabNav from "./modules/tab.js";
import Accordion from "./modules/accordion.js";
import ScrollSmooth from "./modules/scroll-smooth.js";
import ShowSections from "./modules/show-sections.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const accordion = new Accordion("[data-faq='accordion'] dt");
accordion.init();

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const showSections = new ShowSections("[data-anime='scroll']");
showSections.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

fetchAnimais("./animaisapi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

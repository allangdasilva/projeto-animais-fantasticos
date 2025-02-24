import TabNav from "./modules/tab.js";
import Accordion from "./modules/accordion.js";
import ScrollSmooth from "./modules/scroll-smooth.js";
import initiShowSections from "./modules/show-sections.js";
import initiModal from "./modules/modal.js";
import initiTooltip from "./modules/tooltip.js";
import initiDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion("[data-faq='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

initiShowSections();
initiModal();
initiTooltip();
initiDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

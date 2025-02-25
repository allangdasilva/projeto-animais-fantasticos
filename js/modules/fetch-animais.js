import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]");
    animaNumeros.init();
  }
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(target);
      animaisJSON.forEach((animal) => {
        const animalDiv = criarAnimal(animal);
        numerosGrid.appendChild(animalDiv);
      });
      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  }
  function criarAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  return criarAnimais();
}

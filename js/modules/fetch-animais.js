import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]");
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo json
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Preenche cada animal no DOM
      const numerosGrid = document.querySelector(target);
      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach((animal) => {
        const animalDiv = criarAnimal(animal);
        numerosGrid.appendChild(animalDiv);
      });
      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  }
  // Cria a div contendo informações
  // com o total de animais
  function criarAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  return criarAnimais();
}

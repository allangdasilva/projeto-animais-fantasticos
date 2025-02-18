export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diaSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  if (horarioAberto && semanaAberto) {
    funcionamento.classList.add("aberto");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. CARROSSEL DO TOPO COM 3 SLIDES DESLIZANDO AUTOMATICAMENTE
  const trilho = document.getElementById('carrossel-trilho');
  const slides = trilho.querySelectorAll('.slide');
  let slideAtual = 0;

  setInterval(() => {
    slideAtual = (slideAtual + 1) % slides.length;
    trilho.style.transform = `translateX(-${slideAtual * 100}%)`;
  }, 3500);

  // 2. BOTÃO "MOSTRAR CURIOSIDADE"
  const textoCuriosidade = document.getElementById('texto-curiosidade');
  const btnCuriosidade = document.getElementById('btn-curiosidade');

  const curiosidades = [
    'Um carro de Fórmula 1 atual consegue frear de 200 km/h até 0 km/h em pouco mais de 2 segundos, submetendo o piloto a uma força de até 5G.',
    'Durante uma corrida intensa, a temperatura dentro do cockpit de um carro da Stock Car pode ultrapassar os 50 °C.',
    'Os pneus de competição atingem sua aderência ideal apenas quando aquecidos entre 90 °C e 110 °C na pista.',
    'Nas provas de Endurance, como as 24 Horas de Le Mans, os carros chegam a percorrer mais de 5.000 km em um único dia.',
    'O kart é a base de formação de praticamente todos os campeões mundiais do automobilismo, exigindo reflexos rápidos por não possuir suspensão.'
  ];

  let indiceCuriosidade = 0;

  btnCuriosidade.addEventListener('click', () => {
    textoCuriosidade.textContent = curiosidades[indiceCuriosidade];
    indiceCuriosidade = (indiceCuriosidade + 1) % curiosidades.length;
  });
});
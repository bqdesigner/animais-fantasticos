
export default function initHoraFuncionamento() {
    
    const funcionamento = document.querySelector('[data-semana]');
    // Pegando os valores que estão como string, separando pela vírgula, iterando por elas com o map, transformando em número com Number
    const diasSemanas = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    // Variáveis para pegar dia, data e hora corrente
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    // Verificando se não está no fim de semana
    const semanaAberto = diasSemanas.indexOf(diaAgora) !== -1;

    // If simples, veficando se o horário da semana está dentro do horário passado em data-horario
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

    // Caso seja verdadeiro, adiciona a classe aberto, indicando verde, caso contrário, deixa vermelho indicando fechado
    if (semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }
}
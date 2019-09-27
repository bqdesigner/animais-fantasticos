
export default function initAnimaNumeros() {
    

    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]');

        numeros.forEach((numero) => {
            // Pegando os valores do span, passando pra variável e transformando em número
            const total = +numero.innerText;

            // Incremento da animação feito pelo valor / 100
            const incremento = Math.floor(total / 100);
            let start = 0;

            // Função para definir como será o intervalo da animação
            const timer = setInterval(() => {
                // Animando incremento
                start = start + incremento;
                // Passando o valor animado pra dentro do span
                numero.innerText = start;
                // Condição para finalizar o contador quase ultrapasse o número dentro do Span
                if (start > total) {
                    numero.innerText = total;
                    clearInterval(timer);
                }
            }, 30 * Math.random());
        });
    }
    // Função para detectar uma mutação, caso a div que estiver na viewport tiver a classe ativo, iniciar a função de animar números
    function handleMutation(mutation){
        if (mutation[0].target.classList.contains('ativo')) {
            observador.disconnect();
            animaNumeros();
        };
    } 
    // Pega o seção onde está a classe número
    const observadorAlvo = document.querySelector('.numeros');
    // Criar o observador, passando como parâmetro a função que ativará a animação
    const observador = new MutationObserver(handleMutation);
    // O que será observado, como atributo true, caso chegue nele
    observador.observe(observadorAlvo, {attributes: true});
    
}
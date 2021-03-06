export default function initModal() {
    // Pegando os botões que serão usados na interação do Modal
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    // Verificando a existência dos elementos selecionados
    if (botaoAbrir && botaoFechar && containerModal) {
        function toggleModal(event){
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }

        function clicarForaModal(event) {
            if (event.target === this)
                toggleModal(event)
        }

        // Passando as funções para os botões
        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', clicarForaModal);
    }
}
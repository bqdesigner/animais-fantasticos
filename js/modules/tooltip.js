export default function initTooltip() {
    
    // Selecionando todas as tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    })

    // Ao passar o mouse, chamar a função que constrói a tooltip
    function onMouseOver(event) {
        const tooltipBox = criarToolTip(this);

        onMouseLeave.element = this;

        // Passando objetos como callback
        onMouseMove.tooltipBox = tooltipBox
        onMouseLeave.tooltipBox = tooltipBox;
        this.addEventListener('mouseleave', onMouseLeave);
        this.addEventListener('mousemove', onMouseMove);
    }

    // Criando um objeto para ser acessado pela função onMouseOver
    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove();
            // Removendo o eventLister das funções de aparecer e mover a tooltip
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    // Arrastando o mouse e a tooltip seguindo
    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px'; // Alterando a pos. Top pela posição atual do mouse na pos. Y
            this.tooltipBox.style.left = event.pageX + 20 + 'px'; // Alterando a pos. Left pela posição atual do mouse na pos. X
        }
    }

    // Criando a tooltip
    function criarToolTip(element) {
        const tooltipBox = document.createElement('div'); // Criando div para a tooltip
        const text = element.getAttribute('aria-label') // Pegando o texto dentro de aria-label
        tooltipBox.classList.add('tooltip'); // Adicionando uma classe para a tooltip
        tooltipBox.innerText = text; // Passando o texto de dentro da tooltip para o variável de texto
        document.body.appendChild(tooltipBox); // Jogando a tooltip para o fim do documento
        return tooltipBox; // Retornando para o element a tooltip
    }
}
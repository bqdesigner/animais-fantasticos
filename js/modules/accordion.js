// Criando Accordion
export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    // Verificação para fazer a ação abaixo caso haja elementos dentro do accordion
    const activeClass = 'ativo';
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

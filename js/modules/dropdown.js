import outSideClick from './outsideclick.js';

export default function initDropDownMenu() {
    
    const dropdownMenu = document.querySelectorAll('[data-dropdown]');

    dropdownMenu.forEach(menu => {
        // Touchstart é o clique para mobile, e click o geral, assim ele adiciona os métodos para ambos
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        })
    });
    
    // Adicionando a classe ao clicar no menu Sobre
    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        outSideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active');
        });
    };

}
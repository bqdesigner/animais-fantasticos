import outsideclick from './outsideclick.js'

export default function initMenuMobile() {
    
    // Colocando em variáveis o botão e menu mobile
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');

    // Colocando os eventos do mouse em uma array
    const eventos = ['touchstart', 'click'];

    function openMenu(event) {
        menuList.classList.add('active');
        menuButton.classList.add('active');
        outsideclick(menuList, eventos, () => {
            menuList.classList.remove('active');
            menuButton.classList.remove('active');
        })
    }
    eventos.forEach((evento) => {
        menuButton.addEventListener(evento, openMenu);
    })
    
}
// Animação scroll menu
export default function scrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href'); // Pega o href do link clicado
        const section = document.querySelector(href); // Passa o ID que foi pego e guardado no href
        const topo = section.offsetTop;

        section.scrollIntoView({
            behavior: 'smooth', // Comportamento: Suave
            block: 'start',     // Posição dentro da tela: No início
        });

        // Criando a animação setando os dados por objeto
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth",
        // });
    };

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    });
}
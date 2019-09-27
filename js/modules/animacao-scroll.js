// Animação ao Scroll sections
export default function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length) {
        const windowHalf = window.innerHeight * 0.6;
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top; // getBoundingClientRect: Mostra propriedades do elemento em relação a tela, como posição x e y, altura etc
                const IsSectionVisible = (sectionTop - windowHalf) < 0 ;
                if(IsSectionVisible) 
                    section.classList.add('ativo');
                else if (section.classList.contains('ativo')) {
                    section.classList.remove('ativo');
                }
            });
        ;}
        // Ativando scroll ao abrir o site
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

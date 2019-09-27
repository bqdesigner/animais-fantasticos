// Função isolada para saber se foi clicado fora e remover classes ativas
// Sair do modal ao clicar fora do menu
export default function outSideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    // Verificando se o elemento clicado tem o atributo data-outside, e caso tiver, não disparar o evento do clique
    if (!element.hasAttribute(outside)) {

        events.forEach(userEvent => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsideClick);
            }); 
        });

        element.setAttribute(outside, '');
    }

    // Função que dispara ao clicar fora do menu, impedindo diversas ações em EventListeners
    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            callback();
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    //"Espere o HTML carregar completamente e, só então, procure por todos os elementos com o atributo data-tab-button no CSS."//
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    //para saber onde se encontra um elemento, precisa-se saber a altura dele entao faz assim: 
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
       const posicaoAtual =  window.scrollY;
       if (posicaoAtual < alturaHero){
        ocultaElementos();
       } else{
        exibeElementos();
        }
    })

    //seção de atrações, programação das abas.
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();            
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs_button--is-active');
        })
    }

    //seção FAQ, accordion.
    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
})
function ocultaElementos(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementos(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(evento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = evento.target.parentNode;

    elementoPai.classList.toggle(classe);
}


function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i=0; i< buttons.length; i++){
        buttons[i].classList.remove('shows__tabs_button--is-active');
        }
    }




function escondeTodasAbas(){
    const tabsContainer =document.querySelectorAll('[data-tab-id]');

    for (let i=0; i< tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

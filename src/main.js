document.addEventListener('DOMContentLoaded', function(){
    const buttons = documentElement.querySelectorAll('[data-tab-button]');

    
    for (let i=0; i< buttons.length; 1++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo =botao.target.dataset.tabButton;
            escondeTodasAbas();
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            abaAlvo.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs_button--is-active');
        })
    }
})


function removeBotaoAtivo(){
    const buttons =documentElement.querySelectorAll('[data-tab-button]');

    for (let i=0; i< buttons.length; 1++){
        buttons[i].classList.remove('shows__tabs_button--is-active');
        }
    }




function escondeTodasAbas(){
    const tabsContainer =documentElement.querySelectorAll('[data-tab-id]');

    for (let i=0; i< tabsContainer.length; 1++){
        tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }

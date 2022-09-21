function abrirPop() {

    const pop = document.getElementById('pop-up');
    pop.style.display = 'block';
    
    const popBack = document.getElementById('popBack');
    popBack.style.display = 'block';

};

function fechar() {

    const pop = document.getElementById('pop-up');
    pop.style.display = 'none';

    const popBack = document.getElementById('popBack');
    popBack.style.display = 'none';

    const link = document.querySelector('.ativo');
    link.classList.remove('ativo');
    link.innerHTML = 'Copiar chave PIX ➣';
  
};


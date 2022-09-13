const pix = document.querySelector('.chave_pix');
const buttonCopy = document.getElementById('copy');

buttonCopy.addEventListener('click', copiarTexto);

function copiarTexto(e) {

   navigator.clipboard.writeText(pix.innerHTML);
   buttonCopy.classList.add('ativo');
   buttonCopy.innerText = 'Copiado ✅';

};

setTimeout(() => {
    buttonCopy.classList.remove('ativo');
    buttonCopy.innerText = 'Copiar chave PIX ➣';
}, 4000);
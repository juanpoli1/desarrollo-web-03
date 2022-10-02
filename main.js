const hamburguesa = document.querySelector('.hamburguesa');
const hamburguesa_icon = hamburguesa.querySelector('span');
const menumobile = document.querySelector('.menumobile');
hamburguesa.addEventListener('click', () => {
    hamburguesa_icon.innerText = hamburguesa_icon.innerText === 'menu' 
    ? 'close'
    : 'menu';
    
    menumobile.classList.toggle('is-open');
});
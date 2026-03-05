// - mudar nome do botao
// - mudar cor do botao
// - mudar cor do background geral
// - mudar intro 
// - mudar benefits
// - reverter para o original

const btn = document.querySelector('button')
const p = document.querySelector('.intro p') ;

btn.addEventListener('click', () => {
    // document.body.style.backgroundColor = 'lightblue';
    // btn.innerHTML = 'Cliquei';
    document.body.classList.toggle('modo-vip')
    btn.innerHTML = 'Normal Mode'
    p.classList.toggle('modo-vip')
})
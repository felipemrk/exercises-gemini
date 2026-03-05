// - mudar nome do botao
// - mudar cor do botao
// - mudar cor do background geral
// - mudar intro 
// - mudar benefits
// - reverter para o original

const btn = document.getElementById('button')
const divs = document.getElementsByTagName('div')

btn.addEventListener('click', () => {
    // document.body.style.backgroundColor = 'lightblue';
    // btn.innerHTML = 'Cliquei';
    document.body.classList.toggle('modo-vip')
    btn.innerHTML = document.body.classList.contains('modo-vip') ? 'Normal Mode' : 'VIP Mode';
})
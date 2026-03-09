const btn = document.querySelector('.play-button')

btn.addEventListener('click', () => {
    const musicas = document.querySelector('.musics-ul')
    musicas.classList.toggle('reproduzido')
})
const btn = document.getElementById("play-button");

btn.addEventListener("click", () => {
	lista = document.querySelectorAll('li')
	lista.forEach(musica => {
		musica.style.color = 'red'
	});
});

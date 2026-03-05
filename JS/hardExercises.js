// Filtro de avaliações

const notas = [5, 3, 4, 10, 9, 8, 7, 1];

const notasBoas = [];

notas.forEach((value) => {
	if (value > 5) {
		notasBoas.push(value);
	}
});

console.log(notasBoas);

// Busca de passageiro

const passageiros = ["Ana", "John", "Sabrina", "Zébedel"];

for (let i = 0; i < passageiros.length; i++) {
	if (passageiros[i] === "John") {
		console.log("John está no onibus");
	}
}

for (let i = 0; i < passageiros.length; i++) {
	console.log(`Checando o passageiro ${i}`);
	console.log(`Nome: ${passageiros[i]}`);
	if (passageiros[i] === "John") {
		console.log("Encontramos o John, pode mandar prender!");
		break;
	}
}

// Função fantasma (?)

(() => {
	let project = "Plus";
	console.log(project);
})();
//console.log(project);

// Try...catch...Finally

try {
	iniciarServer();
} catch (erro) {
	console.log(`Ops, o seguinte erro ocorreu: ${erro}`);
} finally {
	console.log("Encerrando...");
}

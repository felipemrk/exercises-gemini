// // Frota do Bolinha

// class Carro {
// 	constructor(model, year, gas) {
// 		this.modelo = model;
// 		this.ano = year;
// 		this.combustivel = gas;
// 	}
// 	fazerCorrida(distancia) {
// 		const gas = this.combustivel;
// 		const saldoRestante = gas - distancia;
// 		console.log(`Combustível atual: ${gas}`);
// 		console.log(`Km de viagem: ${distancia}`);
// 		if (saldoRestante <= 10 && saldoRestante >= 0) {
// 			console.log(`Alerta! Combustível em nível crítico.
// Combustível restante: ${saldoRestante} litro(s)`);
//             this.combustivel = saldoRestante
// 		} else if (saldoRestante < 0) {
// 			const consumoPositivo = Math.abs(saldoRestante);
// 			console.log("Gasolina insuficiente para continuar.");
// 			console.log(`Faltam ${consumoPositivo} quilômetro(s)`);
// 		} else if (saldoRestante > 10) {
// 			this.combustivel = saldoRestante;
// 		}
// 	}
// }

// const myCar = new Carro("HB20", "2022", 300);
// console.log(myCar);
// myCar.fazerCorrida(280);
// console.log(myCar);
// myCar.fazerCorrida(19);
// console.log(myCar);
// myCar.fazerCorrida(100);
// console.log(myCar);

// Backlog de Respeito

// const meusJogos = [
// 	{ nome: "Valorant", finalizado: false },
// 	{ nome: "RDR2", finalizado: true },
// 	{ nome: "Mass Effect 2", finalizado: false },
// 	{ nome: "Detroit", finalizado: true },
// 	{ nome: "Detroit2" },
// ];

// console.log("Esses são seus jogos:");
// for (let i = 0; i < meusJogos.length; i++) {
// 	console.log(`${meusJogos[i].nome}`);
// }

// meusJogos.forEach((value) => {
// 	if (value.finalizado) {
// 		console.log(`${value.nome} foi finalizado`);
// 	} else {
// 		console.log(`${value.nome} não foi finalizado ainda`);
// 	}
// });

// Contagem Progressiva

class projetoWeb {
	constructor() {
		this.dataInicio = new Date("2025-12-06");
	}
	calcularTempo() {
		const dataAtual = new Date();
		const dataDiff =
			Math.abs((this.dataInicio - dataAtual) / (1000 * 60 * 60 * 24));
		return Math.floor(dataDiff);
	}
}

const projRPG = new projetoWeb();

console.log(projRPG.calcularTempo());

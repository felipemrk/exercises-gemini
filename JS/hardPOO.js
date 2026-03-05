// Caixa Blindado (POO + TryCatchFinally)

// class ContaMotorista {
// 	constructor() {
// 		this.saldo = 0;
// 	}
// 	receberPagamento(valor) {
// 		if (valor <= 0) {
// 			throw new Error("Valor da corrida não pode ser zero ou negativo");
// 		} else {
// 			this.saldo += valor;
//             return this.saldo
// 		}
// 	}
// }

// const myUberAccount = new ContaMotorista();

// try {
//     myUberAccount.receberPagamento(-1);
// } catch (error) {
//     console.log(error.message)
// } finally {
//     console.log(`Seu saldo é ${myUberAccount.saldo}`)
// }

// Evolução no Tatame

// class Lutador {
// 	constructor(nome, faixa) {
// 		this.nome = nome;
// 		this.faixa = faixa;
// 	}
// }

// class HistoricoTreino extends Lutador {
// 	constructor(nome, faixa) {
// 		super(nome, faixa);
// 		this.treinos = [];
// 	}
// 	registrarTreino(modalidade) {
// 		const dataAtual = new Date();
// 		const data = dataAtual.toLocaleDateString("pt-BR");
// 		const horario = `${dataAtual.getHours()}:${dataAtual.getMinutes()}`
// 		this.treinos.push({modalidade, data, horario});
// 	}
// }

// const bolinha = new HistoricoTreino("Felipe", "Branca");
// bolinha.registrarTreino("Jiu-Jitsu");
// console.log(bolinha);
// bolinha.registrarTreino("Boxe");
// console.log(bolinha);

// const bolinha2 = new HistoricoTreino("John", "Preta");
// bolinha2.registrarTreino("Muay Thai");
// console.log(bolinha2);
// bolinha2.registrarTreino("Karate");
// console.log(bolinha2);

// Playlist de Foco (POO + Laços + Lógica)

// class Playlist {
// 	constructor(nome) {
// 		this.nome = nome;
// 		this.musicas = [];
// 	}
// 	adicionarMusicas(musica) {
// 		console.log(`${musica} adicionada à playlist: ${this.nome}`);
// 		this.musicas.push(musica);
// 	}
// 	tocarTodas() {
// 		const data = new Date();
// 		const horario = `${data.getHours()}:${String(data.getMinutes()).padStart(2, "0")}`;
// 		console.log(`Olá.
// São ${horario} do dia ${data.toLocaleDateString()}
// Agora tocando da playlist: ${this.nome}`);
// 		for (let i = 0; i < this.musicas.length; i++) {
// 			console.log(`Reproduzindo: Slipknot - ${this.musicas[i]}`);
// 		}
// 		console.log('Fim da playlist')
// 	}
// }

// const playlistSlipknot = new Playlist("Slipknot");
// playlistSlipknot.adicionarMusicas("Wait and Bleed");
// playlistSlipknot.adicionarMusicas("Surfacing");
// playlistSlipknot.adicionarMusicas("Custer");
// playlistSlipknot.adicionarMusicas("The Devil in I");
// playlistSlipknot.tocarTodas();

// Desafio de Mestre

class Cassino {
	constructor(nomeCassino) {
		this.nomeCassino = nomeCassino;
	}
}

class MesaDePoker extends Cassino {
	constructor(nomeCassino, nomeMesa) {
		super(nomeCassino);
		this.mesa = nomeMesa;
		this.jogadores = [];
		this.limite = 4;
	}
	entrarMesa(nome) {
		const data = new Date();
		const hora = data.getHours();
		const minutos = String(data.getMinutes()).padStart(2, "0");
		const horarioEntrada = `${hora}:${minutos}`;

		console.log(`Bem-vindo ao cassino ${this.nomeCassino}`);
		if (this.jogadores.length < this.limite) {
			this.jogadores.push({ nome, horarioEntrada });
		} else {
			throw new Error("A mesa está cheia, não foi possível entrar.");
		}
	}
}

const mesa1 = new MesaDePoker("Cassino Bolinha", "Mesa 1");
const jogadores = [null, "Ana", "Lucas", "John", "Cindy", "Davi"];

function portaDeEntrada(mesaDesejada) {
	for (let i = 1; i < jogadores.length; i++) {
		try {
			mesaDesejada.entrarMesa(`${jogadores[i]}`);
			console.log(
				`${jogadores[i]} está pedindo para entrar na ${mesaDesejada.mesa}`,
			);
			console.log(`${jogadores[i]} entrou na mesa`);
		} catch (error) {
			console.log(error.message);
			console.log(`${jogadores[i]} ficou de fora.`);
			break;
		} finally {
			console.log(mesaDesejada.jogadores);
		}
	}
}

portaDeEntrada(mesa1);
console.log(mesa1)
// curso e idadem podem variar, meu nome não
let curso = "Análise e Desenvolvimento de Sistemas";
let idade = 25;
const nome = "Felipe Marques";

console.log(
	`Olá.
Meu nome é ${nome}, tenho ${idade} anos.
Atualmente estou cursando: ${curso}`,
);

var jogos = ["Valorant", "Mass Effect", "Fifa"];

jogos.push("Being a Dik");

console.log(jogos[1]);

const saudacao = function (name) {
	return "Bem-vindo " + name;
};

console.log(saudacao("Yago"));

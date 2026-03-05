// Máquina de código

// function notebook() {
// 	this.marca = "Samsung";
// 	this.modelo = "SamBook";
// 	this.ano = "2021";
// 	this.ligarNotebook = () => {
// 		console.log("Iniciando computador...");
// 		console.log(`Você está usando um ${this.modelo} da marca ${this.marca}`);
// 	};
// }

// nbok = new notebook();

// nbok.ligarNotebook();

// // Máquina refatorada

// const nb = {
// 	marca: "Samsung",
// 	modelo: "SamBook",
// 	ano: "2021",
// 	ligarNB: function () {
// 		console.log("Iniciando computador...");
// 		console.log(`Você está usando um ${this.modelo} da marca ${this.marca}`);
// 	},
// };

// nb.ligarNB();


// Relógio do Ponto

// const days = {
//     0: 'Sunday',
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday'
// }

// const months = {
//     0: 'January',
//     1: 'February',
//     2: 'March',
//     3: 'April',
//     4: 'May',
//     5: 'June',
//     6: 'July',
//     7: 'August',
//     8: 'September',
//     9: 'October',
//     10: 'November',
//     11: 'December'
// }

// const num = 5
// const dataHoje = new Date()
// const dataLocale = new Date().toLocaleDateString('pt-BR')
// const locale = new Date(dataLocale)

// console.log(`${days[(dataHoje.getDay())]}, ${months[dataHoje.getMonth()]} ${dataHoje.getDate()}, ${dataHoje.getFullYear()}`)
// console.log(`Today is ${dataHoje.getDate()}/${dataHoje.getMonth() + 1}/${dataHoje.getFullYear()}`)
// console.log(typeof dataLocale)
// console.log()

// console.log(typeof dataHoje.getMonth())

// A Gangue dos Felinos :O

class Gato {
    constructor(name, color){
        this.nome = name;
        this.cor = color;
    }
}

const jujuba = new Gato('Jujuba', 'Branca')
const bila = new Gato('Bila', 'Cinza rajada')

console.log(`Esses são meus gatos: ${jujuba.nome} e ${bila.nome}`)

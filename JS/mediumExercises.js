// Artes marciais
const martialArts = [
    'Muay Thai',
    'Jiu-Jitsu',
    'Boxe',
    'Kickboxing'
];

martialArts.forEach(function(value, index)
{console.log(`Treino ${index}: ${value}`)})

martialArts.forEach((value, index) =>{
console.log(`Treino ${index}: ${value}`)})


// Calcular Tarifa

const calcularTarifa = (distance) => {
    if(distance <= 5){
        return 10;
    }
    else if(distance > 5 && distance <= 15){
        return 20;
    }
    else{
        return 30;
    }
}

console.log(calcularTarifa(16))

// Maratona de Anime

const narutoEpisodes = 15;

for(let episode = 1; episode <= narutoEpisodes; episode++){
    console.log(`Assistindo o episodio ${episode}`);
}
    console.log('Anime concluído')



const episodesCount = () => {
    let episodeNumber = 1;
    while(episodeNumber <= narutoEpisodes){
        console.log(`Assistindo o episódio ${episodeNumber}`);
        episodeNumber++;
    }
    console.log('Anime finalizado')
}

episodesCount()
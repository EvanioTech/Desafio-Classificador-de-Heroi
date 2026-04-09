// vou usar o array para adicionar meus personagems e suas respectivas xps
let herois = [
    { nome :"pikachu",xp : 2500 },
    { nome :"Bullbasaur" ,xp : 5500},
    { nome :"squirtle",xp : 7600 },
    { nome :"Charizard" ,xp : 8900},
    { nome :"Gengar",xp : 9002 },
    { nome :"Goldengo" ,xp : 1500},
    { nome :"Dragonite",xp : 12000},
    { nome :"Gardevoir" ,xp : 900},
]


for (let index = 0; index < herois.length; index++) {

    const element = herois[index].xp;
    if(element < 1000) {
        let nivel = "Ferro"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    else if(element > 1000 && element <=2000) {
        let nivel = "Bronze"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    else if(element > 2000 && element <=5000) {
        let nivel = "Prata"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    else if(element > 5000 && element <=7000) {
        let nivel = "Ouro"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    else if(element > 7000 && element <= 8000) {
        let nivel = "Platina"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    else if(element > 8000 && element <= 9000) {
        let nivel = "Ascendente"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    else if(element > 9000 && element <= 10000) {
        let nivel = "Imortal"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    else if(element >= 10001) {
        let nivel = "Radiante"
        console.log(`O Herói de nome **${herois[index].nome}** está no nível de **${nivel}**`)
    }
    
    
    
}

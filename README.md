# 🦸 Classificador de Nível de Heróis

Este projeto tem como objetivo classificar heróis com base na sua experiência (XP), atribuindo um nível conforme regras definidas.

---

## 📌 Regras de Classificação

| XP do Herói            | Nível      |
| ---------------------- | ---------- |
| Menor que 1000         | Ferro      |
| 1001 - 2000            | Bronze     |
| 2001 - 5000            | Prata      |
| 5001 - 7000            | Ouro       |
| 7001 - 8000            | Platina    |
| 8001 - 9000            | Ascendente |
| 9001 - 10000           | Imortal    |
| Maior ou igual a 10001 | Radiante   |

---

## 📂 Estrutura do Projeto

```id="tree01"
📁 projeto
 ├── index.js
 ├── desafio.md
 └── README.md
```

---

## 📄 Sobre o desafio

O arquivo `desafio.md` contém a descrição original do desafio proposto, incluindo os requisitos que foram implementados neste projeto.

---

## 💻 Implementação

O código utiliza:

* Um array de objetos para armazenar os heróis
* Um loop `for` para percorrer a lista
* Estruturas condicionais `if/else` para definir o nível com base na XP

```javascript id="code01"
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
// usei o for para poder percorrer a lista, também utilizei  o if como estrutura de decisão para desgnar os niveis de cada herói.

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
```

---

## ▶️ Como executar

1. Instale o Node.js (caso ainda não tenha)
2. Execute no terminal:

```bash id="run01"
node index.js
```

---


## 👨‍💻 Autor

Desenvolvido por Matias

---

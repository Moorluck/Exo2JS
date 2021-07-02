let quit = false;
const scoreMap = new Map()


do {

    const playerName = prompt("Insérer le nom d'un joueur (ne rien insérer quand vous avez fini)")

    if (playerName !== "") {
        scoreMap.set(playerName, 0)
    }
    else {
        quit = true
    }


} while(quit === false)

const nbrManche = prompt("Veuillez insérer le nombre de manche")

for (let index = 0; index < nbrManche; index++) {
    
    scoreMap.forEach((value, key) => {
        const score = parseInt(prompt(`Insérez le score de ${key} pour la manche ${index + 1}`))
        scoreMap.set(key, value + score)
    })
    
}

const bestPlayerView = document.getElementById("bestPlayer");
const classementView = document.getElementById("classement");

let bestPlayerName = ""
let bestPlayerScore = 0

const scores = []
const names = []

scoreMap.forEach((value, key) => {
    if (value >= bestPlayerScore) {
        bestPlayerName = key
        bestPlayerScore = value
    }

    names.push(key)
    scores.push(value)
})

bestPlayerView.innerHTML = "Meilleur joueur : " + bestPlayerName + " avec " + bestPlayerScore + " de score" 

const sortedScores = scores.sort((a, b) => b - a)
const sortedNames = []

for (element of sortedScores) {
    scoreMap.forEach((value, key) => {
        if (element === value) {
            if (names.includes(key)) {
                sortedNames.push(key)
                names.splice(names.indexOf(key), 1)
                console.log(sortedNames);
            }
        }
    })
}


let classementString = ""
for (let i = 0; i < sortedNames.length; i++) {
    classementString += `${sortedNames[i]} : ${sortedScores[i]}, `
}

console.log(classementString);

classementView.innerHTML = "Classement : " + classementString



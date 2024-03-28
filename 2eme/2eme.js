const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')          
const tabLines = input.split('\n')

const target = {
    'red': 12,
    'green': 13,
    'blue': 14
}


const isGamePossible = (stringGame) => {
    let maxRed = 0, maxGreen = 0, maxBlue = 0;
    for (let i = 2; i < stringGame.length; i++) {
        if (stringGame[i] === 'r') {
            let currentNumber = parseInt(stringGame[i-3]+stringGame[i-2])
            if (maxRed < currentNumber)
                maxRed = currentNumber
        }
        else if (stringGame[i] === 'g') {
            let currentNumber = parseInt(stringGame[i-3]+stringGame[i-2])
            if (maxGreen < currentNumber)
                maxGreen = currentNumber
        }
        else if (stringGame[i] === 'b') {
            let currentNumber = parseInt(stringGame[i-3]+stringGame[i-2])
            if (maxBlue < currentNumber)
                maxBlue = currentNumber        
            }
    }
    return maxRed <= target.red && maxGreen <= target.green && maxBlue <= target.blue
}

const getIdGame = (stringGame) =>{
    return parseInt(stringGame.slice(-stringGame.length+5, 8 ))
}


const sumOfPossibleGames = (tab) =>{
    let sum = 0;
    for (let game of tab) {
        if (isGamePossible(game))
            sum += getIdGame(game)
    }
    return sum
}

console.log(sumOfPossibleGames(tabLines))
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')          
const tabLines = input.split('\n')


const getMaxNumbers = (stringGame) =>{
    let maxRed = 0, maxGreen = 0, maxBlue = 0;
    for (let i = 2; i < stringGame.length; i++) {
        if (stringGame[i] === 'r' && stringGame[i+2] === 'd') {
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
    return [maxRed, maxGreen, maxBlue]   
}


const getMultiplyItemsOfArray = (tab) =>{
    let s =1;
    for(let i=0 ; i< tab.length; i++){
        s*= tab[i];
    }
    return s
}


const getResult = (tab) =>{
    let s = 0;
    for(let i=0; i<tab.length; i++){
        s += getMultiplyItemsOfArray(getMaxNumbers(tab[i]))
    }
    return s
}

console.log(getResult(tabLines))
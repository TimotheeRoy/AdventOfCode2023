// const fs = require('fs')
// const input = fs.readFileSync('input.txt', 'utf8')          
// const tabLines = input.split('\n')

const ex = `Card   1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card   2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card   3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card   4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card   5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card   6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`.split('\n')

const removeVoid = (tab) => {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === '')
            tab.splice(i, 1)
    }
    return tab
}

const getWinnigNumbersTab = (card) => {
    let start, end;
    for (let i = 0; i < card.length; i++) {
        if (card[i] === ':')
            start = i + 2;
        else if (card[i] === '|') {
            end = i - 1
        }
    }
    return removeVoid(card.slice(start, end).split(' '))
}

const getNumbersIHaveTab = (card) => {
    let start;
    const end = card.length;
    for (let i = 0; i < card.length; i++) {
        if (card[i] === '|')
            start = i + 2;
    }
    return removeVoid(card.slice(start, end).split(' '))
}

const countWinningNumers = (winningTab, iHaveTab) => {
    let count = 0;
    for (let i = 0; i < iHaveTab.length; i++) {
        if (winningTab.includes(iHaveTab[i])) {
            count++;
        }
    }
    return count
}

const getResult = (inputTab) => {
    let tabOfWinningNumbers = [];
    for (let i = 0; i < inputTab.length; i++) {
        const winningTab = getWinnigNumbersTab(inputTab[i])
        const iHaveTab = getNumbersIHaveTab(inputTab[i])
        tabOfWinningNumbers.push(countWinningNumers(winningTab, iHaveTab))
    }
    console.log(tabOfWinningNumbers)
    let tabOfCopiesNumbers = Array(inputTab.length).fill(1)
    for (let i = 0; i < tabOfWinningNumbers.length; i++) {
        for (let j = 1; j <= tabOfWinningNumbers[i]; j++) {
            tabOfCopiesNumbers[i+j] += tabOfWinningNumbers[i]
            // tabOfCopiesNumbers[i+j]++;
            // console.log('i:', i , 'j;' , j , tabOfCopiesNumbers[j])
        }
    }
    return tabOfCopiesNumbers
}


console.log(getResult(ex))









// const getPoints = (card) =>{
//     const winningTab = getWinnigNumbersTab(card)
//     const iHaveTab = getNumbersIHaveTab(card)
//     const n = countWinningNumers(winningTab, iHaveTab)
//     if (n === 0)
//         return 0
//     else
//         return 2 ** (n -1)
// }

// const getResult = (inputTab) =>{
//     let s = 0;
//     for (let card of inputTab){
//         s += getPoints(card)
//     }
//     return s
// }

// console.log(getResult(tabLines))
const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8')
const tabLines = input.split('\n')

const objNumbers = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const letters = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']


const getFirstAndLastDigit = (string) => {
    let tab = []
    for (let i = 0; i < string.length; i++) {
        if (numbers.includes(string[i]))
            tab.push(string[i])

        else if (letters.includes(string[i] + string[i + 1] + string[i + 2]) && i < string.length - 2) {   //one, two or six
            tab.push(string[i] + string[i + 1] + string[i + 2])
        }
        else if (letters.includes(string[i] + string[i + 1] + string[i + 2] + string[i + 3]) && i < string.length - 3) { //four, five or nine
            tab.push(string[i] + string[i + 1] + string[i + 2] + string[i + 3])

        }
        else if (letters.includes(string[i] + string[i + 1] + string[i + 2] + string[i + 3] + string[i + 4]) && i < string.length - 4) {   //three, seven or eight
            tab.push(string[i] + string[i + 1] + string[i + 2] + string[i + 3] + string[i + 4])
        }
    }

    if (tab.length === 0)
        tab.push('0', '0')
    else if (tab.length === 1) {
        tab.push(tab[0])
    }
    else {
        tab.splice(1, tab.length - 2)
    }
    return tab
}

const convertNumbersLettersIntoNumbers = (tabOfLength2) => {
    for (i = 0; i < tabOfLength2.length; i++) {
        for (let key in objNumbers)
            if (tabOfLength2[i] === key) { tabOfLength2[i] = objNumbers[key] }
    }
    return tabOfLength2
}

const concatenateNumbers = (tabOfLength2) => {
    return [tabOfLength2[0] + tabOfLength2[1]]
}


const laTotaleChefSupplementParseInt = (string) => {
    return parseInt(concatenateNumbers(convertNumbersLettersIntoNumbers(getFirstAndLastDigit(string))))
}

const getSumOfAnArray = (tab) => {
    return tab.reduce((acc, currentV) => acc + currentV, 0)
}

let array = []
for (let string of tabLines)
    array.push(laTotaleChefSupplementParseInt(string))

console.log(getSumOfAnArray(array))
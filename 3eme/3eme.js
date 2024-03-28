const test = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..593.....
......755.
...$.*....
.664.598..`

const symbols = /[\*#+$=@%&-]/g
const numbers = /[0-9]+/g
const tabNumbers = ['0','1','2','3','4','5','6','7','8','9']

const getIndexOfSymbols = (line) =>{
    let indices = [];
    let match;
    while((match = symbols.exec(line)) !== null)
        indices.push(match.index)
    return indices
}

const getIndexOfNumbers = (line) =>{
    let indices = [];
    let match;
    while((match = numbers.exec(line)) !== null)
        indices.push(match.index)
    return indices
}

console.log(getIndexOfNumbers(test.split('\n')[4]))

const getAdjacentNumbers = (line,i,imax) =>{
    let tabOfAdjacent = []
    const tabOfIndexSymbols = getIndexOfSymbols(line)
    if (i===0){
        //sur la même ligne
        const tabOfIndexNumbers = getIndexOfNumbers(line)

        //sur la ligne d'en dessou
    }else if (i === imax){

    }else{

    }
}


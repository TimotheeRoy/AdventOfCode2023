const input = new Set( `Time:        54     70     82     75 
Distance:   239   1142   1295   1253`.split(" "))

const useableInout = [...input]

const [race1,race2,race3,race4] = [
  {time: useableInout[2], distance: useableInout[7]},
  {time: useableInout[3], distance: useableInout[8]},
  {time: useableInout[4], distance: useableInout[9]},
  {time: useableInout[5], distance: useableInout[10]}
];

const f = (race) =>{
  let arr = [];
  const time = parseInt(race.time)
  const dist = parseInt(race.distance)
  for(let holdingT=1; holdingT<time ; holdingT++ ){
    let speed = holdingT
    if (speed*(time - holdingT) > dist)
        arr.push(holdingT)
  }
  return arr
}

console.log(f({ time: 54708275, distance: 239114212951253 }).length);
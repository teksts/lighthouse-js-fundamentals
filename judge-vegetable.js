const judgeVegetable = function(veggies, characteristic) {
  let bestVeggie = 0;
  let winner = '';
  veggies.forEach(veggie => {
    if (veggie[characteristic] > bestVeggie) {
      bestVeggie = veggie[characteristic];
      winner = veggie['submitter'];
    } else if (veggie[characteristic] === bestVeggie) {
        if (winner !== ''){
          winner = '\n' + veggie['submitter'];
        } else {
          winner = veggie['submitter'];
        }
    }
  })
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
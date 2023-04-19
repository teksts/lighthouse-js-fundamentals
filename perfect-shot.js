const myMoves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'north') {
      y += 1;
    } if (move === 'south') {
      y -= 1;
    } if (move === 'east') {
      x += 1;
    } if (move === 'west') {
      x -= 1;
    }
  }
  return [x, y];
}

console.log(finalPosition(myMoves));

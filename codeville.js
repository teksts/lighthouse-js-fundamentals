const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stationArray) {
  let validStations = [];
  for (let station of stationArray) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      validStations.push(station[0]);
    }
  }
  return validStations
}

console.log(chooseStations(stations));
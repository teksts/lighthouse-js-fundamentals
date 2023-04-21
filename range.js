function range (start, end, step) {
  let output = []
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return output
  } else {
    for (i = start; i <= end; i += step) {
    output = output.concat(i);
    }
  return output;
  }
}

console.log(range(0, 20, 1));
console.log(range(1, 50, 8));
console.log(range(-100, 100, 25));
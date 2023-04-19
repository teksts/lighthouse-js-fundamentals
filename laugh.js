function laugh(num) {
  let output = ""
  if (num > 0) {
      output = "!"
      for (let i = num; i > 0; i--) {
          output = "ha" + output
      }
  }
  return output
}

console.log(laugh(0))
console.log(laugh(1))
console.log(laugh(10))
console.log(laugh(-1))
console.log(laugh(0.5))
console.log(laugh(5.5))
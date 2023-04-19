function ageCalculator(name, yearOfBirth, currentYear) {
  output = name + ' is ' + (currentYear - yearOfBirth) + ' years old.';
  return output;
}

console.log(ageCalculator("Miranda", 1983, 2015));
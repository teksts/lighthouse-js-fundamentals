const raining = true;
const cold = false;
const temperature = 12;
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe goiung outside isn't such a great idea...");
} else if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (!raining) {
  console.log("Leave your umbrella at homee!");
}

console.log("Nown you're ready to go outside!");
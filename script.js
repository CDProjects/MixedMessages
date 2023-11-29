const boxingFacts = [
  "Muhammad Ali's birth name was Cassius Clay.",
  "Mike Tyson became the youngest heavyweight champion at the age of 20.",
  "The 'Thrilla in Manila' was a historic boxing match between Muhammad Ali and Joe Frazier in 1975.",
  "Floyd Mayweather has an undefeated record of 50-0",
];

function getRandomBoxingFact() {
  const randomIndex = Math.floor(Math.random() * boxingFacts.length);
  return boxingFacts[randomIndex];
}

const randomFact = getRandomBoxingFact();
console.log(randomFact);

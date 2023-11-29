const boxingFacts = [
    {
      fact: "Muhammad Ali's birth name was Cassius Clay.",
      source: "Biography"
    },
    {
      fact: "Mike Tyson became the youngest heavyweight champion at the age of 20.",
      source: "Sports History"
    },
    {
      fact: "The 'Thrilla in Manila' was a historic boxing match between Muhammad Ali and Joe Frazier in 1975.",
      source: "Boxing Matches"
    },
    {
      fact: "Floyd Mayweather has an undefeated record of 50-0",
      source: "Boxing Records"
    }
  ];
  
  function getRandomBoxingFact() {
    const randomIndex = Math.floor(Math.random() * boxingFacts.length);
    return boxingFacts[randomIndex].fact;
  }
  
  const randomFact = getRandomBoxingFact();
  console.log(randomFact);
  
let raceNumber = Math.floor(Math.random() * 1000);

let isRegisteredEarly = true;

let runnerAge = 9;

if (isRegisteredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (isRegisteredEarly && runnerAge > 18) {
  console.log(`You will race at 9:30am and your race number is: ${raceNumber}`);
} else if (!isRegisteredEarly && runnerAge > 18){
  console.log(`You will race at 11:00am and your race number is: ${raceNumber}`);
} else {
  console.log(`You will race at 12:30pm and your race number is: ${raceNumber}`);
}

let raceNumber = Math.floor(Math.random() * 1000); 
const registeredEarly = true;
const ageOfRunner = 22;

if (ageOfRunner >= 18 && registeredEarly) { 
    console.log(raceNumber += 1000);
} 

if (ageOfRunner >= 18 && registeredEarly) {
    console.log(`Race time is 9::30 am ${raceNumber}`);
} else if (ageOfRunner >= 18 && !registeredEarly) {
    console.log(`Race time is at 11:00 am ${raceNumber}`);
} else if (ageOfRunner < 18) {
    console.log(`Race time for youth is at 12:30pm ${raceNumber}`);
}

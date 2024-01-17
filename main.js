let raceNumber = Math.floor(Math.random() * 1000);
//placed a variable for generating a rounded down random number for our runners!
let registeredEarly = true;
//here we will figure out if the runner registered early or late. 'true' for early, 'false' for late
let runnersAge = 18;
//variable created for entering the runners age, if they're over 18 or under 18.

//if else statement below to sort through which runners registered early or late, and what age category they're in.
//If you're over 18 and registered late you're running at 11:30, if you're early registration you run at 9:30
//youth (under 18) all runs at 12:30pm
if (runnersAge >= 18 && registeredEarly){
   console.log(`Since you're 18 & over you're in the adult race, your race number is ${raceNumber += 1000} & your race will start at 9:30am`);
}else if(runnersAge >= 18 && !registeredEarly){console.log(`Since you're over 18 and in the adult category, your race number is ${raceNumber -= 1000} & your race will start at 11:00am`);
}else if(runnersAge <= 18){
   console.log(`Since you're in the youth race, your race number is ${raceNumber += 1000} & your race will start at 12:30pm`);
}else{
  console.log("looks like you're not running today!");
}
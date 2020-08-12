lifeInWeeks(prompt("Write your Age: "));

function lifeInWeeks(age) {

var ageDays = 32850-(age * 365);
var ageWeeks = 4680-(age * 52);
var ageMonths = 1080-(age * 12);

alert("You have " + ageDays + " days, " + ageWeeks + " weeks, and " + ageMonths + " Months left"  );

}

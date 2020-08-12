function leapYear(year) {
var test4 = year % 4;
var test100 = year % 100;
var test400 = year % 400;

if (test4 === 0  && test100 === 0 && test400 === 0) {
    return "Leap year.";
}
else if (test4 === 0  && test100 === 0 && test400 !== 0) {
    return "Not leap year.";
} else if (test4 === 0) {
    return "Leap year.";
} else {
    return "Not leap year.";
}
}

leapYear(2100);

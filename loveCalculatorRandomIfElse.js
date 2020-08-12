var firstN = prompt("What is your Name: ");
var secondN = prompt("Who is your Crush: ");
var n = Math.random();
n = Math.floor(n * 100);

if (n > 70) {
    alert(firstN + " and " + secondN + " is " + n + "% Compatible!" + " You have a Great Chance of Love!");
}
else if (n < 30 && n <= 70) {
    alert(firstN + " and " + secondN + " is " + n + "% Compatible!" + " Somehow your both okay , but try to work it harder");
} else {
    alert(firstN + " and " + secondN + " is " + n + "% Compatible!" + " You cannot be together like oil and water");
}

console.log(n);

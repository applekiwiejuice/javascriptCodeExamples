var bottles = 99;

function countdown() {
while (bottles > 0) {
    console.log(bottles + " of beer on the wall, " + bottles +
    " bottles of beer, take one down and pass it around, " + (bottles-1) +
    " bottles of beer on the wall");
    bottles--;
    if (bottles === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer, go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}
}

countdown();

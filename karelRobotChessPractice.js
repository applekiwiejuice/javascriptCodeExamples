function main(){
   lineMove1();
   turnLeft1();
   lineMove2();
   turnRight1();
   lineMove1();
   turnLeft1();
   lineMove2();
   turnRight1();
   lineMove1();

}

function lineMove1() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function turnLeft1() {
   turnLeft();
   move();
   turnLeft();
   move();
}

function lineMove2() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();

}

function turnRight1() {
   turnRight();
   move();
   turnRight();
}

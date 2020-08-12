var asterisk = " ";

function generate(number) {
  for (var i = 0; i < number; i++) {
    asterisk += "*";
    //        console.log(asterisk);
    if (i === number - 1) {
      return makeDiamond(number);
    }
  }
}

function makeDiamond(number) {
  var blank = " ";
  var helper = 0;
  var space = (number / 2) - 1;
  for (var i = space; i > 0; i--) {
    blank += " ";
  }
  for (var i = number; i > number / 2; i--) {
    var forBlank = number - i;
    var forAsterisk = i - (number + 1 + helper);
    console.log(asterisk.replace(asterisk, blank.slice(forBlank) + asterisk.slice(forAsterisk) + blank.slice(forBlank)));
    helper = helper + 1;
  }
  test(number);
}

function test(number) {
  var blank = " ";
  var helper = 0;
  var space = (number / 2) - 1;
  for (var i = space; i > 0; i--) {
    blank += " ";
  }
  for (var i = 1; i < number / 2; i++) {
    var forBlank = ((number / 2) - i) - 1;
    var forAsterisk = i - (number - 2 - helper);
    console.log(asterisk.replace(asterisk, blank.slice(forBlank) + asterisk.slice(forAsterisk) + blank.slice(forBlank)));
    helper = helper + 1;
  }
}

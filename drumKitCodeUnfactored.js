var numberOfButtons = document.querySelectorAll(".drum").length;


//for loop to add event listener , then switch statement for easier approach
for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
    var buttonInnerHTML = this.innerHTML;
      switch (buttonInnerHTML) {
        case "w":
          sounds("w");
          break;

          case "a":
            sounds("a");
            break;

            case "s":
              sounds("s");
              break;

              case "d":
                sounds("d");
                break;

                case "j":
                  sounds("j");
                  break;

                  case "k":
                    sounds("k");
                    break;

                    case "l":
                      sounds("l");
                      break;


        default: console.log(buttonInnerHTML);

      }

  });

}

//Trial on keypressed
document.addEventListener("keydown" , function(event) {
  var eve = event.key;
  console.log(eve);
  sounds(eve);
  }
)

//Sounds all belong here
function sounds(value) {
  switch (value) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
      break;

      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

        case "s":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;

          case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

            case "j":
              var audio = new Audio('sounds/snare.mp3');
              audio.play();
              break;

              case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

                case "l":
                  var audio = new Audio('sounds/kick-bass.mp3');
                  audio.play();
                  break;


    default: console.log(value);

  }
  }



//These are practice things

//Plain
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


//This InnerHTML
// if (this.innerHTML === "w") {
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
// }


//Change Color to White Example of this
  // this.style.color = "white";

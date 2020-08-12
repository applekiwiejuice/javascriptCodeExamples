// document.getElementById("output").innerHTML = "Hello World";

// document.write("Hello World!");

// window.alert("Hello World!");

// console.log("Hello World!");

// var age = 17;
//
// if (age < 18) {
//   window.alert("Still a Minor!");
// }

// function computeAge(age1 , year) {
//   var total_age = age1 + year;
//   return window.alert(total_age);
// }
//
// window.alert(computeAge(28 , 5));
//
// document.getElementById("output").innerHTML = computeAge(30 , 10);



// document.addEventListener("click" , function (){
//   window.alert("The page was clicked!");
// });

// document.addEventListener("click" , function (){
//   computeAge(28 , 5);
//   document.getElementById("output").style.backgroundColor = "red";
// });

var todo_count = 1;

document.getElementById("savebtn").addEventListener("click", addToDo);

function addToDo() {
  var todo_item = document.getElementById("todo");

  if (todo_item.value == "") {
    window.alert("Please enter to-do item!");
    todo_item.focus();
  } else {

      appendToDo(todo_item.value);
  }

}


function appendToDo(todo_item) {

    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(todo_count + ". " + todo_item));
    li.setAttribute("class", "todo-item");

    ul.appendChild(li);

    clear_field("todo");
    setFocus("todo");
    todo_count++;
}


function clear_field(field_name){
  document.getElementById(field_name).value = "";
}

function setFocus(field_name) {
  document.getElementById(field_name).focus();
}

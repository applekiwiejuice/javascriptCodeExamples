// FOR LOOPS EXAMPLES

// Increment For Loops

for (let n=1; n <= 16; n++) {
document.write("Hello World!" +"<br />");
document.write(n +"<br />");
}

// Increment For Loops

for (let n=16; n >= 1; n--) {
       document.write(n +"<br />");
}

// Display Odd Numbers

for (let n=50; n <= 200; n++) {
 if (n % 2) {
   document.write(n +"<br />");
 }
}

// For of Example

let cars = ["Toyota", "Honda", "Mitsubishi", "Suzuki", "Tesla"];
let output = "";

for(let car of cars){
  output += "<option>" + car + "</option>";
}

document.getElementById("cars").innerHTML = output;

document.write("<br />");

// For In Example

let person = {
  name : "Apple ",
  surname: "KiwiEJuice ",
  age: 88
}

let text = "";
for(let n in person){
  text += person[n];
}

document.write(text);

document.write("<br />");

// Multiplication Table Example Nested For Loop

document.write("<table>");

for (var x = 1; x <= 10; x++) {
  document.write("<tr>");
  for (var y = 1; y <= 10; y++) {
    document.write("<td>" + x * y + "</td>");
  }
  document.write("</tr>");
}

document.write("</table>");

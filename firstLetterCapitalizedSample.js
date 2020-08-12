var name = prompt("Write your Name: ");
var capital = name.slice(0,1);
capital = capital.toUpperCase() + name.toLowerCase(name.slice(1,name.length));
alert("The first letter of your Name is Capitalized: " + capital)

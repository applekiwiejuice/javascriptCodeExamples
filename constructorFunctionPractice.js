
//constructor function
function HouseKeeper (name,age,exp,cleaning,permit,lang,clean) {
    this.name = name;
    this.age = age;
    this.exp = exp;
    this.cleaning = cleaning;
    this.permit = permit;
    this.lang = lang;
    this.move = move;
}


//initialize object
var houseKeeper1 = new HouseKeeper("Linda" , 30 , 5, ["bathroom" , "bedroom"], true, ["English" , "Tagalog"]);

houseKeeper1
HouseKeeper {name: "Linda", age: 30, exp: 5, cleaning: Array(2), permit: true, …}


var houseKeeper2 = new HouseKeeper("Lando" , 45 , 1, ["rooftop" , "balcony"], true, ["English" , "Bisaya"]);

houseKeeper2
HouseKeeper {name: "Lando", age: 45, exp: 1, cleaning: Array(2), permit: true, …}

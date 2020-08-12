function Car (year , color , model) {
    this.year = year
    this.color = color
    this.model = model
}

class Car2 {
    constructor(year , color , model) {
        this.year = year
        this.color = color
        this.model = model
    }

    power() {
        this.speed = this.speed + 10;
    }
}

var car1 = new Car(2020 , "red" , "toyota")
var car2 = new Car2(1960 , "black" , "volkswagen")

class CarsForSale extends Car {}

var car3 = new CarsForSale(1995 , "blue" , "bmw")


// Override mileage() from superclass by coding the same method in the subclass

class NewCar extends Car2 {
           power() {
        this.speed = this.speed + 10;
 }
}

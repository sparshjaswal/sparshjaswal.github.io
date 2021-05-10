# CHAPTER | prototyping chaining

Let's take an example to understand prototype chaining.

1. ### Create an objects like Car, Truck and Bus for company Ford and with common rawMaterial

```javascript
function companyItem(productName) {
  this.productName = productName;
}
Item.prototype.rawMaterial = "Iron";
Item.prototype.company = "Ford";

var Car = new companyItem("Car");
var Bus = new companyItem("Bus");
var Truck = new companyItem("Truck");
```

As we see we have wide variety of car.So, our Car Object doesn't specificity which modal of car is it.

```javascript
function companyItem(productName) {
  this.productName = productName;
}
Item.prototype.rawMaterial = "Iron";
Item.prototype.company = "Ford";

var Car = new companyItem("Car");
var Bus = new companyItem("Bus");
var Truck = new companyItem("Truck");

// modal of car
Car.prototype.modal = function (modalName) {};


// TO DO
1.
function Light() {}
Light.prototype.color = "red";

function Bulb() {}
Bulb.prototype = new Light();

Light.prototype.color = "blue";
console.log(new Bulb().color);

1.
Which code specifies the Operator constructor as the prototype for the Multiply constructor?
You are correct!
Multiply.prototype = new Operator();

1.
What is an advantage of using a constructor function to build objects?
You are correct!
It lets you avoid writing redundant code.
```

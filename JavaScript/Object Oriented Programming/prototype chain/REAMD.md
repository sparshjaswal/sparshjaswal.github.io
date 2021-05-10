# CHAPTER 4 | prototyping chain

Let's take an example to understand prototype.

1. Creating objects like Car, Truck and Bus for company Ford;

```javascript
function Car() {
  this.rawMaterial = "Iron";
  this.company = "Ford";
  this.productName = "Car";
}
var CarOne = new Car();

function Truck() {
  this.rawMaterial = "Iron";
  this.company = "Ford";
  this.productName = "Truck";
}
var TruckOne = new Truck();

function Bus() {
  this.rawMaterial = "Iron";
  this.company = "Ford";
  this.productName = "Bus";
}
var BusOne = new BusOne();
```

Let's optimize the above code.

```javascript
function companyItem(productName) {
  this.productName = productName;
}
Item.prototype.rawMaterial = "Iron";
Item.prototype.company = "Ford";

var Car = new companyItem('Car')
var Bus = new companyItem('Bus')
var Truck = new companyItem('Truck')
```

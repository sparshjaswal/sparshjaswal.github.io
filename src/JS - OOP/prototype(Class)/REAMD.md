# CHAPTER | prototype

Its an property an object has.

## Let's understand by taking an example to understand prototype

### Create an objects like Car, Truck and Bus for company Ford and with common rawMaterial

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

> Let's optimize the above code.

```javascript
function companyItem(productName) {
  this.productName = productName;
}
companyItem.prototype.rawMaterial = "Iron";
companyItem.prototype.company = "Ford";

var Car = new companyItem("Car");
var Bus = new companyItem("Bus");
var Truck = new companyItem("Truck");
```

### **what are the benefits?**

**Saves the memory** as each instances of companyItem have common space for rawMaterial & company

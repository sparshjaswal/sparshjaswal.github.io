# Object Composition

IS-A relationship
eg 1:-
class Person {
      		constructor(firstName, lastName) {
            		this.firstName = firstName;
            		this.lastName = lastName;
      		}
}
class Employee extends  {
      		constructor(empid, firstName, lastName, salary) {
            		super(firstName, lastName);
            		this.empid = empid;
            		this.salary = salary;
      		}
}
const emp = new Employee(13, "Sparsh", "Jaswal", 10);
console.log(emp);

eg 2:-
class Bird {
      		fly() {
           	 	return 'Birds fly';
      		}
}
class Kiwi extends Bird {
      		//method redefinition or overriding
      		fly() {
            		return super.eat() + "But we don't fly";
      		}
}
const birdKiwi = new Kiwi();
console.log(birdKiwi.eat());

Has-A relationship :- Object has links with another
class Product {
    		constructor(id, name) {
          		this.id = id;
          		this.name = name;
    		}
}
class Order {
    		constructor(id, product) {
          		this.id = id;
          		//has-a
          		this.product = product;
    		}
}
//Link objects during runtime
let product = new Product(1, 'Levis-Pant');
//dependency injection
let order = new Order('Flipkart01', product);
console.log(`${order.id} ${order.product.name}`)

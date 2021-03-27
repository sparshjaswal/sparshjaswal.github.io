# Monads
As a pure functional programming rule, a function for any input has to give exactly the same output But function can take arguments. It's based on category theory.
A monad is an object.
Axiom of monads
IS-A inheritance
HAS-A compositions
class Product{
    		constructor(id,name){
        		this.id=id;
        		this.name=name;
    		}
}
class Order{
    		constructor(id,product){
        		this.id=id;
        		//has-a
        		this.product=product;
    		}
}
//link object during runtime
let product = new Product(1,"Dress");
//dependency injection
let order = new Order('A001',product);
console.log(`${order.id} ${order.product.name}`);


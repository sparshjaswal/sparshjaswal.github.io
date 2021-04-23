CHAPTER 24 | prototyping & __proto__
JavaScript will support prototype inheritance rather than classical inheritance. The concept of prototype inheritance is very unique among various high-level languages. JavaScript has a property attached to it i.e. __proto__.
var a= 12;
console.log(a.__proto__)


Javascript supports Pseudo classical inheritance or what we say as a prototypal inheritance. Let’s take the above example.
When we define var a=12; it's actually pseudo-classical inheritance being applied. Every identifier in JavaScript has __proto__ property attached to it. This __proto__ property holds the linkage/parent class object and if we further console.log(a.__proto__.__proto__),we can see Object as root parent class.So the inheritance chaining is maintained by __proto__ property.
We have discussed the above inheritance chaining property or __proto__ property. But isn’t inheritance is all about using parent class members and methods using child class instances? Below is the answer to the same.
You can see var a can use all the properties and methods that are present in class Number & Object.
Below are the ways we can do Inheritance explicitly prototypal way
Case 1:-
let FirstName = {
    firstName : "Sparsh",
    printFirstName(){
        return this.firstName
    }
}
let FullName = {
    lastName:"Jaswal",
    printFullName(){
        return this.firstName + this.lastName
    }
}
FullName.__proto__ = FirstName;
console.log(FullName.printFirstName())
console.log(FullName.printFullName())
console.log(FullName.lastName)
console.log(FullName.firstName)
console.log(FullName.__proto__)
console.log(FullName.__proto__.__proto__)
console.log(FullName.isPrototypeOf(FirstName)) // false
console.log(FirstName.isPrototypeOf(FullName)) // true
//loop to print all the properties and methods of object
for(let prop in FullName){
    if(FullName.hasOwnProperty(prop))
        console.log("own property\t"+prop)
    else
    console.log("inherited property \t"+prop)
}
Case 2:- 
function FirstName(){
    		this.firstName= "Sparsh",
    		this.printFirstName= function(){
        		return this.firstName
    		}
}
function FullName(){
    		this.lastName="Jaswal",
    		this.printFullName = function(){
        		return this.firstName + this.lastName
    		}
}
 
FullName.prototype = new FirstName();
var FName = new FullName();
console.log(FName.printFirstName())
console.log(FName.printFullName())
console.log(FName.lastName)
console.log(FName.firstName)
console.log(FName.__proto__)
console.log(FName.__proto__.__proto__)
console.log(FName.isPrototypeOf(FirstName)) // false
console.log(FName.isPrototypeOf(FullName)) // true
//loop to print all the properties and methods of an object
for(let prop in FName){
    		if(FName.hasOwnProperty(prop))
        		console.log("own property\t"+prop)
    		else
    			console.log("inherited property \t"+prop)
}
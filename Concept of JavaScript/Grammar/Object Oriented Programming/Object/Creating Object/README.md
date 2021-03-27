# ****CHAPTER 23 | Creating Object****

****In Javascript, Objects can be created using below listed ways:-****
1. Using a new Operator & constructor function(the new operator creates and initializes a new object).
“new” keyword must be followed by a function invocation (constructor function & initialize a newly created object).
function Student(name,age){
    this.name = name;
    this.age = age;
    this.print = function(){
        console.log(this.name+"\n"+this.age)
    }
}
var Student2= new Student("jaswal",30);

1. Object Literals (comma-separated list of name-value pairs wrapped in curly braces).
A property name is a javaScript identifier or a string literal(the empty string is allowed).
Property value is any JavaScript expression. The value of the expression (it may be a primitive value or an object value) becomes the values of the property.
Reserved words may be used as property names without quoting.
Trailing comma following the last property in an object literal is ignored but in older browsers or IE considers them an error.
var Student= {
    name : "Sparsh Jaswal",
    age  : 28,
    detail: function(){
            console.log(this.name+"\n"+this.age)
    }
}
	[TODO Convention of writing Object in JS]

1. Class (ES 6) defines the blueprint of an object But it's syntactically sugar work similar to traditional object creations.
class Student {
    		constructor(name,age) {
        		this.name = name;
        		this.age = age;
			this.print =  function(){
            		console.log(this.name+"\n"+this.age)
    		}
    		}
      }
const Student2 = new Student("Sparsh","25");

****We can define everything inside the constructor function but then it won’t be shared across all inherited objects and will redefine each time a new instance is created. Anything outside the constructor is a part of the prototype which will be shared across all the instances.
Runtime-augmented scope[todo]
Defining or assigning object keys and value :-****

1. Dot Operators
var obj = {};
obj.name = "sparsh"; //initializing property name
obj.name //accessing property with dot operator
obj.display = function () { // initializing method
    console.log(this.name)
}
obj.display() // accessing method with dot operator

1. Square Bracket 
Associate Array is an abstract data type that can hold data in (key, value) pairs like dictionaries, hash, map. JavaScript Objects are associative arrays.
var obj = {};
obj["name"] = "sparsh"; //initializing property name
obj["name"] //accessing property with square bracket operator

Object.defineProperty 
var object = {};
Object.defineProperty(object,"name",{
    		value:"sparsh",
    		writable: true,
    		enumerable: true,
    		configurable: true
});
[todo] get , set and writable explanation
Object.defineProperties
var object = {};
Object.defineProperty(object,{
      "name": {
    			value:"sparsh",
    			writable: true,
    			enumerable: true,
    			configurable: true
      },
      "age": {
    			value:"25",
    			writable: true,
    			enumerable: true,
    			configurable: true
       },
);
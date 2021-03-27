CHAPTER 14 | function &  composition
In JavaScript, functions are treated as first-class citizens because it acts as data.
function can be assigned to a variable
function can be passed to another function as a parameter
function can be returned from another function
a function can be declared inside another function: closure

We can store the value inside a function and expect to get the same value.
  var value = function (num){
     return num;
  }
  console.log(value(1));

function as a statement 
  function myFunc(num){
  	console.log(1);
  }
  console.log(myFunc(1));
	
function as an expression
  var sayHello = function (name) {
       return "Hello!!!"+ name;
  }
  sayHello("sparsh")
 an expression is a statement which will evaluate the value.
function as an object
  var greeting = function testName(){
   	console.log('Good Morning');
  }
  console.log(typeof greeting)
  console.log(greeting instanceof Function)
  var add = new Function('x','y', 'return x + y')
  console.log(add(1,2))
  console.log(typeof add)

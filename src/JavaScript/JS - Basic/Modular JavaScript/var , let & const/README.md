CHAPTER 10 |  var, let & const

let and const are newly introduced keywords in ES6 specifications which are used to define or initialize identifiers.
E.g;-
let variableName;
const constantName = 'value';

The difference between var, let and const
parameter
var
let
const
scope
function/global
block
block
      redeclare
yes
no
no
initialization
optional
optional
must
mutable
yes
yes
no
Hoisting
yes
no
no

Q1)What could be output?
const name1 = "sparsh";
const name2 = "sparsh";
if(name1==name2)
   		console.log("same")
else 
   		console.log("different")

Q2) a)What could be output?
const user1 = {
   		name : "sparsh",
   		age : 28
}
const user2 = {
   		name : "sparsh",
   		age : 28
}
if(user1 == user2)
   		console.log("same")
else 
   		console.log("different")

b) trying to compare an object?
	JSON.stringify() 

CHAPTER

# Flow Control
Usually, programmers need to control the flow of the program or certain statements are needed to be executed only when some conditions are satisfied. So flow control in javascript is mostly done by If...else, switch and conditional operators.
If...else
if statement specifies a block of code to be executed if the condition is true while else specify inverse of if.
if (condition) {
    		// block of code to be executed if the condition is true
}
else { 
    		// block of code to be executed if the condition is false
}
However, if a block fits well if we have 2 conditions to be checked or to some extent holds well for 4-5 conditions but beyond that code has become very much complex and reduces the readability.
Some of the false values in javaScript aera as below:-
undefined
null
0
boolean(false)
empty
NaN
if(undefined && NaN && null && '' && 0 && false)
	console.log("true")
else    
    	console.log("false") //false
Note:- falsely doesn't means that while comparing with false returns true
if(false == undefined) //false
if(false == NaN) //false
if(false == null) //false
if(false == '') //true
if(false == 0) //true
if(false == false) //true

Short-Circuiting
Javascript compiler evaluates conditionally statement using below  use cases is known as Short-Circuiting
If the if condition has logical AND operations
Any occurrence of false statements will skip the checking of the following statement and result false.
If the if condition has logical OR operations
Any occurrence of true statements will skip the checking of the following statement and result true.
Equals Vs Strict Equals(== and ===)
Equals test for abstract equality while strict equals test for strict equality i.e equals does not check for the dataType while strict Equals does.
Equals operator perform below operations base on use case:-
	Comparing numbers & string 
		a string is converted to a number and then a comparison is made
Comparing boolean & non-boolean
		non-boolean is converted to a boolean and then a comparison is made
Comparing object & primitive data-type
	the object is converted to primitive data-type and then a comparison is  made

switch
the switch statement executes the one block of among many blocks upon validating conditions.
	syntax :-
switch(expression) {
    		case unique_value:
      			statement
      			break;
    		default:
      			default statement
}
Q) output of below code?
console.log(null == undefined)
console.log(null === undefined)
console.log(-0 == +0)
console.log(-0 == 0)
console.log(0 == +0)
console.log(0/0)
console.log(1/0)
console.log(-1/0)
console.log(-Infinity == +Infinity)
console.log("this is string"/5)
console.log(NaN===NaN)
console.log(NaN!==NaN)
console.log(false == "")
console.log(false == null) 
console.log(false == undefined) 
console.log(false == 0)
console.log(false == NaN) 
Object.is can also be used to compare to values & will work fine except below one:-
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true

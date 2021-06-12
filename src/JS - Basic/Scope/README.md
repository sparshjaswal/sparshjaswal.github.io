# SCOPE

JavaScript has lexical scoping which means compile-time scope ( scoping decisions are taken at the phase of the lexical parser and divide the code into a series of tokens and maintain global scope or local scope table). Lexical scoping also implies that the position of the variable is declared is important. 

In javascript, we can apply programmatically
Functional
Block

functional
 Identifiers declared inside the functions are functional scope
function functionName(){
  		identifier(s)    // not accessible outside this function
}

Block
Identifiers declared inside the { } are block scope
{
  		identifier(s)    // not accessible outside this block
}

In javascript, scopes are maintained at runtime as
Executions context
Global context
By default or the top scope is global scope i.e. each identifier is attached to a window object and as the function or block scope occurs the compiler creates a separate execution scope. The scope can be multilevel or nested but each scope shall be different and unique. Each execution scope has its own identifiers.
 
function functionName(){
    		console.log('functionName')
}
functionName();
/*
    		Inside window environment
    		functionName: ƒ functionName()
        		arguments: null
        		caller: null
        		length: 0
        		name: "functionName"
        		prototype: {constructor: ƒ}
        		__proto__: ƒ ()
        		[[FunctionLocation]]: VM62:1
        		[[Scopes]]: Scopes[2]
        		0: Script {animations: {…}, …}
        		1: Global
*/



The scope chain is the execution context of functions or scopes of different environments.
var x=1;
f1();
console.log(this)
function f1(){
   		var x =20;
   		console.log(this)   
   		console.log(x)
   		f2();
		function f2(){
       		console.log(this)       
       		console.log(x)
       		f3();
       		function f3(){
           			console.log(this)
           			console.log(x)
       		}
   		}
}


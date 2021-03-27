# Functional Programming

### There are two most common or popular ways of writing code

1. #### **Imperative or Procedural programming**

2. #### **Functional or Declarative programming**

### Design Principles :-

1. #### **Extensibility** - *Do I constantly refactor my code to support additional functionality*

2. #### **Generalize Code** - *DRY code or always write a generalize function*

3. #### **Easy to modularize** - *if I change one file, is another file affected?*

4. #### **Reusability** - *is there a lot of duplication?*

5. #### **Testability** - *Do I struggle to unit test my functions?*

6. #### **Easy to reason about** - *Is my case unstructured and hard to follow?*

### Functional programming inherent declarative mode of development and based on below fundamental concepts:-

1. #### **Declarative programming**

1. #### **Pure functions**

1. #### **Recursion**

1. #### **Referential transparency**

1. #### **Variables are Immutability**

1. #### **Functions are first-class and can be Higher-Order**


# function & PROGRAMMING STYLE

 functions in javaScript are the fundamental building blocks and helps to improve readability and reusability of code.

Defining/Declaring a function
function functionName( parameter(s)) {
  		statement(s);
}

Calling of function
functionName(argument(s))

An argument is an inbuilt object which stores all the value (s) being passed to a function.
Given a problem statement, to check if a number is odd or even. The given problem statement can be achieved by below to ways:-
1)
var num =10;
if(10%2===0)
  		console.log("even");
else 
  		console.log("false");
2)
  	var num =10;
  	oddOrEven(num);
  	function oddOrEven(num){
    		if(num%2===0)
      			console.log(“even”);
    		else 
      			console.log(“false”);
  	}

Both (1) & (2) solve our problem statements but correspondence to a different style of programming. Solution (1) is known as imperative programming and solution(2) is known declarative programming.
  

# Functional Programming
OO makes code understandable by encapsulating moving parts.
FP makes code understandable by minimizing moving parts.
								--Michael Feathers (twitter)
Design Principles:-
Extensibility - Do I constantly refactor my code to support additional functionality
Generalize Code - DRY code or always write a generalize function.
Easy to modularize - if I change one file, is another file affected?
Reusability - is there a lot of duplication?
Testability - Do I struggle to unit test my functions?
Easy to reason about - Is my case unstructured and hard to follow?
Functional programming inherent declarative mode of development and based on below fundamental concepts:-
Declarative programming
Pure functions
Recursion
Referential transparency
Variables are Immutability
Functions are first-class and can be Higher-Order
[todo]
Function programming is declarative?
imperative or procedural
Declarative programming
What is functional programming?

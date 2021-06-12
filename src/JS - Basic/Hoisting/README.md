CHAPTER 34 | Hoisting
Hoisting is one of the made-up concepts and definitely not intended to be supported by the JavaScript language Standards. It is found to be a glitch or useful thing to be used by the programmers. Whenever we declare a variable or function, the declaration comes to the top of their scope i.e we can use the identifier first and then declaring them is termed as Hoisting.
Case 1
   	console.log(number);
   	var number=10;
   	console.log(number);
Case 2
   	function print(){
    		console.log(number);
    			var number=10;
   			console.log(number);
   	}  
   	print()
Case 3
   	function print(){
    		console.log(number);
   	}
   	print();
   	var number=10;
   	console.log(number);    
Case 4
var num = 50;
function logNumber(){
   		console.log(num);
   		var num =100;
}
logNumber();
*change the above code using let
	* why not we have got an error, not re-initializing num

Case 5
var x = 10;
function y() {
    		x = 100;
    		return ;
    		function x() {}
}
y();
console.log(x)
//x = 10 -> hoisting in Javascript

Case 6
function printName(){
    		function name() {
      			return 'sparsh';
    		}
  		return name();
    		function name() {
      			return 'jaswal';
    		}
}
name();


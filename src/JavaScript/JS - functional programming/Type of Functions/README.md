CHAPTER 18 | Type of Function
Arity is defined as a number of arguments a function takes and its best practice that a function should have fewer parameters.

unary Function
          A function is called unary if it takes a single argument.
function name(name){
    		console.log(name)
}
name("sparsh")      

binary Function
          A function is called binary if it takes two arguments.
function name(name,age){
    		console.log(name)
}
name("sparsh",28)     

variadic function
          A variadic function is a function that takes a variable number of arguments.
function num(a){
    		console.log(arguments)
}
num(1,2,3,4,5,6)


factory Function
       A function acts as a factory i.e creating an object and returning it.
function student(name,age){
    return {
        "name":name,
        "age":age,
        print:function(){
            console.log(this.name,this.age)
        }   
    }
}
student("sparsh",28)

currying function
It is a technique of translating the evaluations of a function that takes multiple arguments into evaluating a sequence of functions each with a single argument.
function add(num1){
    return function (num2){
        return function (num3){
                return num1+ num2+ num3;
           }
   }
}
        // OR
add = (num1) => (num2) => (num3) => {
    return num1+ num2+ num3;
}
add(25)(50)(10)                               


Higher-order function
a function which returns a function or accepts a function as an argument 
function add(num1){
    		return function (num2){
            		return num1+ num2;
   		}
}
add(25)(50)

Above example is indeed a higher-order function but the above code sample can be used in various different ways. An Actual or useful higher-order function is a function which extends or adds to the functionality of a function.

Partial Function
a function which allows applying the function arguments partially.
const addThree = (a,b,c) =>  a+b+c;
const partialAdd = add.bind(null,5)
console.log(partialAdd(5,4))

Memoization 
If the function and its arguments are the same compiler, cache the result and give the values.
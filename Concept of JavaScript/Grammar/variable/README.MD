# var & TYPES OF IDENTIFIERS

The var keyword is used to define or declare a variable identifier.
e.g;-
var variableName;

Programmers can also initialize using the assignment operator.
E.g;-
var variableName = value;

Computer memory is in the form of bits(0 or 1) and generally, ram memory is utilized for programming.when we create a variable with the variableName, we assign a memory address and the size of memory is dependent on the value being assigned to the variable.
Rules for variables names
The first character must be a letter or an underscore (_). You can't use a number as the first character. 
The rest of the variable name can include any letter, any number, or the underscore. You can't use any other characters, including spaces, symbols, and punctuation marks.
Variable names are case sensitive.
There's no limit to the length of the variable name.
You can't use one of JavaScript's reserved words as a variable name. 
Additionally, As a rule of naming convention, we use camel case for variable name and pascal case for a class or constructor name.
 e.g. of camel case (the first character is always the small case and other from the character of words are capitalized ) 
var firstName = "sparsh";

e.g. of pascal case (the first character of the word is always the upper case and generally class or constructor name  is in pascal case ) 
class Student{};

JavaScript is loosely typed or weakly typed language i.e. while declaring the variable we don't define the type of value variable holds and also its a dynamic language as the creation of variable at runtime is possible and also the type of variable is determined at runtime or type checking is runtime.
In JavaScript, Actually two types of type of identifier 
Reference 
stored in heap memory
Dynamically stored
considered to be faster.
 	e.g. Object
Primitive types 
size is fixed 
stored in stack memory
e.g. number, null , string ,boolean , undefined and symbol, BigInt
Below are the types of value an identifier can hold in JavaScript:-
number	
var num = 13;  // typeof num -> number 
var num = 12.4; // typeof num -> number
var num = -1; // typeof num -> number
var num = NaN; // typeof num -> number

string
var str = 'sparsh'; // typeof num -> string
var str = 's'; // typeof num -> string

boolean		
var flag = true; // typeof num -> boolean
var flag = false; // typeof num -> boolean

undefined
var value; // typeof value-> undefined

object
var arr = []; // typeof arr -> object
var value = null; // typeof value->  object
var obj = { name: 'sparsh' }   // typeof obj -> object 

function
typeof alert; // alert is one of inbuilt functions
function num(){} // typeof num; -> function 

symbol
var unique = Symbol('id'); // typeof unique -> symbol
    
BigInt()
var unique = Symbol('id'); // typeof unique -> symbol
Implied globals [obsolete]
Any variable which is not defined or declared is considered a global variable by default.
e.g;-
variableName = value;


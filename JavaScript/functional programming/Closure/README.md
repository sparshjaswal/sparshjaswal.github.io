# Chapter 1 | Closure

## Ability of a function to store a reference to anything outside its scope

```javascript
function fullName() {
  var firstName = "sparsh";
  return function () {
    return firstName + " jaswal";
  };
}
console.dir(fullName());
```

![closure](/closure.png)

let fullName = name(); // name function is pop out for call stack
console.log(fullName()) // even if name function is pop out but
// inner function still has access to variable of outer function
// closure via parameter
function name(firstName){
return function(){
return firstName +" jaswal"
}
}
var fullName = name("sparsh");
console.log(fullName())
Or
const name = (firstName) => () => firstName +" jaswal"
const fullName = name("sparsh");
console.log(fullName())

closure saves memory and encapsulates data.
function dynamicData(index){
var arr = new Array(1000).fill(1) //heavy data operation
return arr[index]
}
console.log(dynamicData(5))
Above code is does heavy data operations and if we need to call 10 times then it will utilise lots of memory.Below is solutions
function dynamicData(){
var arr = new Array(1000).fill(1) //heavy data operation
return function (index){
return arr[index]
}
}
const value = dynamicData();
console.log(value(5))
console.log(value(7))

````

## With help of closures function,we can call a heavy duty function once its operations task can be called multiple times.In Source of data is being encapsulated or any operations within is being encapsulated

## 1. Case 1(IIFE)

```javascript
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(array[index]);
    }, 3000);
  })(i);
}
````

## 1. Case 2(callback)

```javaScript
function delay(){
      var value =10;
      setTimeout(function(){
          console.log("this is callback function"+value)
      },3000)
}
delay();
```

Closure provides below patterns implementation:-
Memoize or once
Maintains state / variable environment
private space
Persistence
Closures give functions in javaScript memory.
[Advance topic todo]

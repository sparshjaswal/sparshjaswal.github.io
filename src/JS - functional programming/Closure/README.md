# Chapter 1 | **Closure**

## _Ability of function to store a reference which is outside the scope of function is closure_

### Let's see some practical use case

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

### Closure provides below patterns implementation:-

1. #### Memoize or Persistence or Additional memory to function

```javascript
function dynamicData(index) {
  var arr = new Array(1000).fill(1); //heavy data operation
  return arr[index];
}
console.log(dynamicData(5));
```

_**Above code is does heavy data operations and if we need to call 10 times then it will utilise lots of memory.Below is solutions**_

```javascript
function dynamicData() {
  var arr = new Array(1000).fill(1); //heavy data operation
  return function (index) {
    return arr[index];
  };
}
const value = dynamicData();
console.log(value(5));
console.log(value(7));
```

##### With help of closures function,we can call a heavy duty function once its operations task can be called multiple times.In Source of data is being encapsulated or any operations within is being encapsulated

1. #### private references or encapsulates data

1. #### Case 1(IIFE)

```javascript
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(array[index]);
    }, 3000);
  })(i);
}
```

1. #### Case 2 (callback)

```javaScript
function delay(){
      var value =10;
      setTimeout(function(){
          console.log("this is callback function"+value)
      },3000)
}
delay();
```

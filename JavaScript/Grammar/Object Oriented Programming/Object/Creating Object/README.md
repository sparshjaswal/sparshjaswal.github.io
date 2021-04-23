# CHAPTER 23 | Creating Object

## In Javascript, Objects can be created using below listed ways:-

1. __Using an Object constructor and new Operator__

```javaScript
var Student = new Object();
Student.name = 'Sparsh Jaswal';
Student.dob = '25/07/1991';
```

1. __Object Literals (_comma-separated list of name-value pairs wrapped in curly braces_)__

```javascript
var Student= {
    name : "Sparsh Jaswal",
    age  : 28,
    detail: function(){
            console.log(this.name+"\n"+this.age)
    }
}
 [TODO Convention of writing Object in JS]
```

>Trailing comma following the last property in an object literal is ignored but in older browsers or IE considers them an error.

1. __Class (ES 6) defines the blueprint of an object But it's syntactically sugar work similar to traditional object creations__

```javascript
class Student {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    this.print = function(){
        console.log(this.name+"\n"+this.age)
    }
}
const Student2 = new Student("Sparsh","25");
```

> _We can define everything inside the constructor function but then it won’t be shared across all inherited objects and will redefine each time a new instance is created. Anything outside the constructor is a part of the prototype which will be shared across all the instances._

Runtime-augmented scope[todo]

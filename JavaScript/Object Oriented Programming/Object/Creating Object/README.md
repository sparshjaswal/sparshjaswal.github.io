# CHAPTER | Creating Object

## In Javascript, Objects can be created using below listed ways:-

1. **Using an Object constructor and new Operator**

```javaScript
var Student = new Object();
Student.name = 'Sparsh Jaswal';
Student.dob = '25/07/1991';

function Student(name,dob){
    this.name=name;
    this.dob=dob;
}
var student = new Student('sparsh','25/07/1991');
```

1. **Object Literals (_comma-separated list of name-value pairs wrapped in curly braces_)**

```javascript
var Student = {
  name: "Sparsh Jaswal",
  age: 28,
  detail: function () {
    console.log(this.name + "\n" + this.age);
  },
};
```

> Trailing comma following the last property in an object literal is ignored but in older browsers or IE considers them an error.

1. **Class (ES 6) defines the blueprint of an object But it's syntactically sugar work similar to traditional object creations**

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

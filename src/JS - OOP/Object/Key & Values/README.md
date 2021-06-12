
# Defining or assigning object keys and value :-

## Some Rules for defining Keys and values:-

1. A property name is a javaScript identifier or a string literal(_the empty string is allowed_).

1. Property value is any JavaScript expression. The value of the expression (_it may be a primitive value or an object value_) becomes the values of the property.

1. Reserved words may be used as property names without quoting.

## Keys & Value

1. Dot Operators

```javascript
var obj = {};
obj.name = "sparsh"; //initializing property name
obj.name //accessing property with dot operator
obj.display = function () { // initializing method
    console.log(this.name)
}
obj.display() // accessing method with dot operator
```

1. Square Bracket

Associate Array is an abstract data type that can hold data in (key, value) pairs like dictionaries, hash, map. JavaScript Objects are associative arrays.####

```javascript
var obj = {};
obj["name"] = "sparsh"; //initializing property name
obj["name"] //accessing property with square bracket operator

Object.defineProperty
var object = {};
Object.defineProperty(object,"name",{
      value:"sparsh",
      writable: true,
      enumerable: true,
      configurable: true
});
```

## SET & GET properties of  Object

get , set and writable explanation
Object.defineProperties

```javascript
var object = {};
Object.defineProperty(object,{
      "name": {
       value:"sparsh",
       writable: true,
       enumerable: true,
       configurable: true
      },
      "age": {
       value:"25",
       writable: true,
       enumerable: true,
       configurable: true
       },
);
```

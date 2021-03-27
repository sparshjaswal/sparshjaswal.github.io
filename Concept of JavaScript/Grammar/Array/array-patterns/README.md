# Array Pattern

Some of the popular **array pattern** used are below :-

1. Deep Copying Array Pattern

```javascript
const arr = [1,2,3];
// adding a number between 1 and 3
const index = numbers.indexOf(2);
const addedArr = [
      ...numbers.slice(0,index),
      4,
      ...numbers.slice(index)
]
// removing and deep copying an array
const removed = numbers.filter(num => num!==2)
// adding and deep copying an array
const update = numbers.map(n => (num===2?num*10:num))
```

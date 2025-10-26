# JavaScript Array Methods

## Essential Array Operations

### Adding Elements

```javascript
const arr = [1, 2, 3];

// Add to end
arr.push(4); // [1, 2, 3, 4]

// Add to beginning  
arr.unshift(0); // [0, 1, 2, 3, 4]

// Add at specific position
arr.splice(2, 0, 'new'); // [0, 1, 'new', 2, 3, 4]
```

### Removing Elements

```javascript
const arr = [1, 2, 3, 4, 5];

// Remove from end
const last = arr.pop(); // returns 5, arr becomes [1, 2, 3, 4]

// Remove from beginning
const first = arr.shift(); // returns 1, arr becomes [2, 3, 4]

// Remove specific elements
arr.splice(1, 2); // removes 2 elements starting at index 1
```

### Iteration Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element, return new array
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - return elements that meet condition
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// find - return first element that meets condition
const found = numbers.find(num => num > 3); // 4

// reduce - accumulate values into single result
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15
```

### Search Methods

```javascript
const fruits = ['apple', 'banana', 'orange'];

// Check if element exists
fruits.includes('banana'); // true

// Find index of element
fruits.indexOf('orange'); // 2

// Find index using condition
fruits.findIndex(fruit => fruit.length > 5); // 1 (banana)
```

### Utility Methods

```javascript
const arr = [3, 1, 4, 1, 5];

// Sort array (modifies original)
arr.sort(); // [1, 1, 3, 4, 5]

// Reverse array (modifies original)
arr.reverse(); // [5, 4, 3, 1, 1]

// Join elements into string
arr.join('-'); // "5-4-3-1-1"

// Get portion of array (doesn't modify original)
arr.slice(1, 3); // [4, 3]
```

## Modern Array Methods

```javascript
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
];

// flatMap - map then flatten
const names = users.flatMap(user => [user.name]); // ['John', 'Jane', 'Bob']

// some - check if any element meets condition
const hasAdult = users.some(user => user.age >= 18); // true

// every - check if all elements meet condition
const allAdults = users.every(user => user.age >= 18); // true
```

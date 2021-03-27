
# Array Method

## JavaScript language support inbuilt methods like

```javascript
var arr = [1,2,3,4,5];
arr.forEach(element => element ); // 1,2,3,4,5
arr.map( element => element * 2) // [2,4,6,8,10]
// return sum of all elements of array 
      arr.lastIndexOf(2) // first index of matched element from last or -1
      arr.indexOf(2) // first index of matched element or -1
arr.includes(2) // array contain the matched element then true else false
arr.flat(1) // returns new array with 1(can be any) level destructuring
arr.fill(0,0,4) // fill 0 from 0 to 4 index
```


## How to Traverse through each element in javaScript?

```javaScript
for(var temp of num)
     console.log(temp)
```

Adding elements to Array?

```javaScript
num[num.length-1] = 9
   Or
num.push(9) // add 9 and return added element which is 9
   Or
adding element from the first
num.unshift(0) // returns the index
Removing element from Array?
num.pop()  // return removed element end
   Or
removing element from the first
num.shift()  // return removed element
   Or
num.splice(0,1)  
//0 is index and 1 count of elements to be targeted from 0
// return the array of element removed
   Or
delete num[0]
// leave empty footprint
// return true if deleted otherwise false
Updating element from Array?
num[0] = 5
   Or
num.splice(0,1,44)
// 0 is index 
// 1 count of elements to be targeted from 0
// 44 element to be inserted
// return array of old value

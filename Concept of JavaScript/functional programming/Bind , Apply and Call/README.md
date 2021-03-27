# bind, call and apply

Bind function lets you define the context for the target function and will always return function. The value which is being passed through bind will not change(value will stick to return function).  Given an object

```javascript
let student = {
    name : "sparsh",
    printName : function () {
         return this.name;
    }
};
let student1 = {
   name: "jaswal"
}
```

How can I reuse/borrow the function print name?

```javascript
const student = {
    name : "sparsh",
   	printDetail : function (registrationNo,age) {
       	console.log("Name: "+this.name );
       	console.log("Registration Number: "+registrationNo );
        console.log("Age: "+age );
   	}
};
student.printDetail(10,28);
// give output Name: sparsh    Roll No: 10

const student2 = {
   	name: 'jaswal'
}
let student2Func = student.printDetail.bind(student2,11);
student2Func(40);
student2Func(40,20);
student.printDetail.call(student2,12,32)
student.printDetail.apply(student,[22,41])


const array = [1,2,3];
function getMaxNumber(arr){
    return Math.max.apply(null, arr);  
}
getMaxNumber(array)
```

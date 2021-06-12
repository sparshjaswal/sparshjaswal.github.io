# Promises
A promise is an object that may give a single value or error sometime in future. Promises will always have three state resolve, reject and pending.

![alt text](https://github.com/sparshjaswal/javascript/Promise/promises.png?raw=true)

// definitions or declarations with logic of promise
const promise = new Promise((resolve,reject) => {
    var a;
    setTimeout(()=>{
        a=parseInt(Math.random()*10)
        if (a%2==0)
            resolve(a+' Math.random gives '+a+' even number');
        else 
            reject(' Math.random gives '+a+' odd number')
    },5000)
})
// calling of promise object and working on the result of the promise object
promise
.then( result => {
    console.log(" then block:-",result)
})
.catch( reject => {
    console.log(" catch block:-",reject)
})
.finally(()=> { //optional block always execute once the promise is resolved.
    console.log("promise implementation")
})

Above is one of the basic implementations of promise and gives you a good understanding of how the promise works.
Case 1:- 
Let’s say you have multiple asynchronous activities and you want to work on the result of all the activity without error. Below is the implementation.
const promiseOne = new Promise( (resolve,reject) => {
    		setTimeout(resolve,10000,"I")
})
const promiseTwo = new Promise( (resolve,reject) => {
    		setTimeout(resolve,2000,"Love")
})
const promiseThree = new Promise( (resolve,reject) => {
    		setTimeout(resolve,8000,"India")
})
Promise
.all([promiseOne,promiseTwo,promiseThree])
.then(values => {
    		console.log(values)
})
.catch( error => { 
            console.log(error)
       })
	// output -> ["I", "Love", "India"] 
// array of resolved values
  	Note:- If any api promise fails then catch block will execute.
Case 2 ( Promise.allSettled() ES 2020):-
Let’s say you have multiple asynchronous activities and you want to work on the result of all the activity but if error exists you want to know the same too. Below is the implementation
const promiseOne = new Promise( (resolve,reject) => {
    		setTimeout(resolve,1000,"I")
})
const promiseTwo = new Promise( (resolve,reject) => {
    		setTimeout(reject,5000,"error")
})
const promiseThree = new Promise( (resolve,reject) => {
    		setTimeout(resolve,2000,"India")
})
Promise
.allSettled([promiseOne,promiseTwo,promiseThree])
.then(values => {
    		console.log(values)
})
.catch( error => { 
    		console.log(error)
})
// output -> Array of resolved and rejected value with key status and value

Case 3:-
Let’s say you have multiple asynchronous tasks and need to execute the only task which got completed first. Below is an implementation
const promiseOne = new Promise( (resolve,reject) => {
    		setTimeout(resolve,1000,"I")
})
const promiseTwo = new Promise( (resolve,reject) => {
    		setTimeout(resolve,5000,"Love")
})
const promiseThree = new Promise( (resolve,reject) => {
    		setTimeout(resolve,2000,"India")
})
Promise
.race([promiseOne,promiseTwo,promiseThree])
.then(values => {
    		console.log(values)
})
.catch( error => { 
    		console.log(error)
})
// output -> I  & is the first resolved value.

The promise implementations route to a separate API which is independent of the call stack but once it's resolved or rejected it routes back to the call stack queue via Job Queue which is similar to call-stack Queue. The tasks in a job queue have higher priority over the call-stack Queue.
[todo] Problem with promise



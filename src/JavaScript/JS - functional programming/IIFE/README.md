[IIFE]
IIFE is a function expression that is called Immediately Invoked Function Expression i.e function which is executed after it's created.  

```
(function printMsg(msg){
    		console.log(msg);
})("Hello World");
		
var sayHello = function (name) {
   		return "Hello!!!"+ name;
}();

(
   		() => console.log("Hello world")
)();
```

Advantage of using IIFE 
Maintain the private scope
Provide implement practices or design

// we have to create dynamically 5 buttons each button will have its own alert
`window.addEventListener('load', (event) => {
    for(var i = 1;i<=5;i++){
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BODY");
        button.innerHTML = 'Button' + i;
        button.onclick = function(){
            alert('this is button 1'+i)
        }
        body.append(button);
    }
});`

//solutions to above problem
`window.addEventListener('load', (event) => {
    for(var i = 1;i<=5;i++){
        var body = document.getElementsByTagName("BODY")[0];
        var button = document.createElement("BODY");
        button.innerHTML = 'Button' + i;
        (function(num){
            button.onclick = function(){
                alert('this is button 1'+num)            
  	}
  })(i)
  body.append(button);
}
});`
With IIFE we can give the opportunity to bind multiple/concat files with any issue of scope collisions. Tools like grunt , glup emerges.
But the issues observed:-
How to remove dead code
Lots of IIFE are used which increase the slowness.
[Todo]

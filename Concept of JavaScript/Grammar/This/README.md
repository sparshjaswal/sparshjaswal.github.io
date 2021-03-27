# This
“This is the object that function is a property of” - 
binds this lexically or lexically static scoping
In order to run your code in javascript, we need to wrap it in the execution context. Base execution context is called a global context. Global execution context will create 
Global object( in the browser is a window global object )
console.log(window)
Gives all global objects and methods
console.log(this)

This (current execution context)
points to objects of the current execution context
Gives access to the method to the Object
Reusability of code

  var myCar = {
     color:"Blue",
     logColor: function() {
         var self = this ;
         console.log("In logColor - this.color:" + this.color);
         console.log("In logColor - self.color:"+self.color);
         (function(){
             console.log("In logColor - this.color:" + this.color);
             console.log("In logColor - self.color:"+self.color);
         })();
     }
  }
  myCar.logColor()

Since JavaScript supports lexical scoping so the where the identifiers are defined is important and this is always dynamically scoped.


const a = function () {
    		console.log('a',this);
    		const b = function(){
        		console.log('b',this)
        		const c = {
            			print :function(){
                		console.log('c',this)
            		}
        	}
        	c.hi()
    	}
}
a()


const obj1 = {
    			name : 'sparsh',
    			print(){
        			console.log(this.name,this)
        			let Obj2 = function(){
            			console.log(this.name,this)
       		}
        		Obj2();
    		}
}
obj1.print()

Since JavaScript supports lexical scoping so the where the identifiers are defined is important and this is always dynamically scoped. To avoid the use of the dynamic nature of this and make our code more controlled we can use arrow function and bind. By using arrow function and bind we can explicitly assign an execution context to dynamically this.



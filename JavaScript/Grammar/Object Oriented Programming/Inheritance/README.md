# Inheritance

Inheritance is one of the principles of OOP.ES6 introduces the class & extends keyword which is like the classical inheritance. Overloading is not supported in JavaScript.
class Student{
    		constructor(name,age){
        		this.name=name;
        		this.age=age;
    		}
    		printDetail(){
        		console.log(this.name+" "+this.age)
    		}
}	
class Sport extends Student{
    		constructor(game,name,age){
        		super(name,age)
        		this.playingGame= game
    		}
    		printDetail(){
        		console.log(this.playingGame,this.name,this.age)
    		}
}
var student = new Student("sparsh",28)
var sport = new Sport("football","sparsh",28)
sport.printDetail();
student.printDetail();
console.log(sport) // can se link between Student & Sport
console.log(student) //can see link between Student and Object
 




Class field proposal is in stage 4 in we can create class private property or methods using # sign. Also, we can use weak-map to make it private.

Object.create ( ES 5 )
 Object.create accepts only Object or null as an argument.
When null is passed 

An empty object is returned.
When Object is passed(can be object identifier )
An empty object is returned with a link to the passed object.This link ensures :-
All linked/chained object properties are directly accessible by the returned object but linked property is not a part of the returned object.
Any change in linked/chained objects will automatically be reflected back.
var student = Object.create ({
    		name:"sparsh",
    		age : 26,
    		print(){
        		console.log(this.name+"\n"+this.age)
    		}
});
var student2 = Object.create(student);
console.log(student2.name,student2.age,student2.print)
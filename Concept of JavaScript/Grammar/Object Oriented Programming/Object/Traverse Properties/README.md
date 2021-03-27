# ****Traversing Properties****

****Let’s suppose I have an object with lots of properties. How to Traverse through each property in javaScript?****

      ``var Obj = {
       		name : 'sparsh',
       		age : 28,
       		position : 'Developer',
       		from : 'Himachal'
   	}``

Code will be more consistent by following the rules of functional programming and one such rule is immutability.An object that we are creating should be immutable.
Object.freeze(student);
Object.seal(student);
Object.preventExtensions(student);


Code will be more performant if we use the objects that are frozen.
Updating an Object with immutability practice
const person = { name:"sparsh"}
// want to update the object and properties to same
const updatedPerson = Object.assign({},person,{name:"sparsh jaswal",age:30})
const updatedPerson = {...person,name:"sparsh jaswal",age:30}
Above pattern fails for nested Object
updatedPerson.address.city = "delhi"
Above code will change both updatedPerson & person as its shallow copy for nested objects(address).To avoid the above fail we can use the below pattern.

const person = { name:"sparsh",address: { city:"bengaluru",pin:560035}}
// want to update the object ,its nested properties and properties to same
const updatedPerson = 
  Object.assign(
    {},
    person,
    {address:{"city":person.address.city}},
    {name:"sparsh jaswal"}
)
 
const updatedPerson = {
    ...person,
    address:{
      ...person.address
    },
    name:"sparsh jaswal",
    age:30
  }

CHAPTER 45 | Event Handling

Event is basically an action or set of actions. To perform some task/action we need to accomplish a set of instructions specific to a task/action. Javascript has a set of inbuilt events and gives programmer liability to define one.
Syntax of listening event:- 
    
/*-target element--------------*/                   event   operation of task*/
document.getElementById('button').addEventListener("click", function(event) {
  console.log("Button clicked");
}, true);
  /*capture or bubble*/

Above syntax is to handle the event or to perform the task if a certain event triggers. What if we wanted to have an event which is not a javascript inbuilt event or which are combinations of two events.
Syntax of creating an event:- 
var customEvent = new Event('SparshEvent'),
    targetElement =document.getElementById('Button')
targetElement.addEventListener('SparshEvent', function(e) {    console.log('custom event')},false);
targetElement.dispatchEvent(customEvent);

Adding multiple event handlers to an event:- 
  targetElement.addEventListener('click',functionName1);
  targetElement.addEventListener('click',functionName2);



Event Propagation
Generally, events are propagating in javascript by default.they are two ways events are being propagated 
Bubbling(child to parent)
Capturing(parent to child)

Event Delegation
Delegate is defined as a person sent or authorized to represent others, in particular, an elected representative sent to a conference. Since Javascript support event propagation and the event of the parent node can be delegated to handle events of the child node.
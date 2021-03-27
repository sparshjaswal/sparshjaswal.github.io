CHAPTER 12 | Pure Functions and Side Effects
The most important or stepping stones of functional programming is to make or write immutable code which is based on building blocks of pure function. A pure function has the following qualities:-
Fully dependent on the input and not on any other value that might get change during providing the output.
Not modifying a global object or parameter passed by reference.
Always do one task
No shared state and immutable state
Composable
Predictable

Any function which doesn’t meet above requirements are impure functions and may cause side effects.
Side effects may cause many situations and below are some of the rules that are recommended to be avoided as a step towards pure functional programming:-
changing a variable, property or data structure globally
changing the original value of a function’s argument
processing user input
throwing an exception, unless it’s caught within the same function
printing to the screen or logging
Querying the Html documents, browser cookies or databases
Avoid loops use recursions
Removing function like Date, Math.random
freezing all array and object  literal
[todo]

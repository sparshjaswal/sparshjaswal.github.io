# Concurrency Model And Event Loop

JavaScript has a concurrency model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.

### Concurrency means multiple computations are happening at the same time

## Stack :- A Stack is an ordered collection of items where the addition and removal of item  items happens at one end. This ordering principle is sometimes called LIFO, last-in first-out.

## Queue :- A queue is an ordered collection of items where the addition of new items happens at one end, called the “rear,” and the removal of existing items occurs at the other end, commonly called the “front.” This ordering principle is sometimes called FIFO, first-in first-out. It is also known as “first-come first-served.”

## Heap :- It is group of memory space available for developer for store object in any random order.

## The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop. Each event is just a function callback.
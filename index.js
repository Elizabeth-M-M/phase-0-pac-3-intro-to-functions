// Follow along with the examples here
function doNothing() { }
function sayHello() {
  console.log("Hello!");
}

function sayHelloToIsabel() {
  console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
  console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
  console.log("Hello, Brendan!");
}
// sayHello();
// sayHelloToIsabel();
// sayHelloToSofia();
// sayHelloToBrendan();
function sayHelloTo(firstName) {
  console.log(`Hello, ${firstName}!`);
}

// sayHelloTo("Isabel"); // "Hello, Isabel!"
// sayHelloTo("Jane"); // "Hello, Jane!"
// sayHelloTo("R2-D2"); // "Hello, R2-D2!"
// sayHelloTo(1); // "Hello, 1!"
// console.log(firstName);
function say(greeting, firstName) {
    // return `"Greeting is: ", ${greeting}`;
    // return "First Name is: ", firstName;
    return `${greeting}, ${firstName}`;
}
function say(greeting, firstName) {
//   console.log(`${greeting}, ${firstName}!`);
}
// console.log(say("Hi", "Ella"));
// say("Goodbye", "Julio");
// say("Julio", "hello");

function add(x, y) {
    // return x + y;
    x + y;
}
// console.log(add(1, 2));
function say(greeting, firstName) {
console.log("I was called!");
  return `${greeting}, ${firstName}!`;
  }
console.log(say("Howdy", "partner"));


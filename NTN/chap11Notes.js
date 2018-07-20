// First-Class objects- the can be passed around in the same way as every other value
// they also are flexible tools with javascript
function square(x) {
    return x*x;
}
square.length
// call and apply methods
function sayHello(){
    return `Hello, my name is ${ this.name }`;
    }
const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };
sayHello.call(clark);
sayHello.call(bruce);
function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
    }
sayHello.call(clark, 'How do you do');
// 'How do you do, my name is Clark'
sayHello.call(bruce);
// 'Hello, my name is Bruce'
square.call(null, 4)
// 16
square.apply(null, [4])
// 16
// custom properties
square.description = 'Squares a number that is provided as an argument'

// Memoization
// If a function takes some time to compute a return value, we can save the result in a cache property.
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
    }
square(3);
// 9
square(-11);
// 121
square.cache;
// {"3": 9, "-11": 121}

// An Immediately Invoked Function Expression – or IIFE (pronounced “iffy”) – is an anonymous function that, as the name suggests, is invoked as soon as it’s defined.
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();
// 'hello world'
// temporary variables
let a = 1;
let b = 2;
(()=>{
    const temp = a;
    a = b;
    b = temp;
})();
a;
// 2
b;
// 1
console.log(temp);
//Error: "temp is not defined"
let [a,b] = [1,2];
[a,b] = [b,a];
a;
// 2
b;
// 1
// Initialization code
// example logs a welcome message to the console, then eliminates all the temporary variables used to put the message together.
(function() {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality const days =
    ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   const date = new Date(),today = days[date.getDay()]; console.log(`Welcome back ${name}. Today is ${today}`);
   })();
   // 'Welcome back Peter Parker. Today is Tuesday'
// Creating self-contained code blocks
(function() {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
    }());
    (function() {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
    }());
// Hello from Block A
// Hello from Block b
// dynamic nature of javascript
// you can do this by assigning an anonymoud function to a variable that has the same name as the function
// init-time branching
function ride(){
    if (window.unicorn) {
        ride = function(){
 // some code that uses the brand new and sparkly unicorn
 methods
return 'Riding on a unicorn is the best!';
}
} else {
        ride = function(){
        // some code that uses the older pony methods
        return 'Riding on a pony is still pretty good';
    }
    }
    return ride();
}
// callback types
// event-driven asynchronous programming
function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
    }

function selfDestruct(){
    console.log('BOOOOM!');
}
// callback hell
// term used to refer to this tangled mess of code
// teh user logs in and a user object is returned
// the user ID is then used to fetch player information from teh server
// the game then loads based on the player information
// login(userName, function(error,user) {
//     if(error){
//         throw error;
//     } else {
//         getPlayerInfo(user.id, function(error,info){
//         if(error){
//         throw error;
//         } else {
//             loadGame(info, function(error,game) {
//                 if(error){
// }); }
// }); }
// });
// Async Funcitons allowing to write asynchronous code as if it was synchronous
async function loadGame(userName) {
    try {
    const user = await login(userName);
    const info = await getPlayerInfo (user.id);
    // load the game using the returned info
    }
    catch (error){
    throw error;
    }
}
// generalized functions
function random(a,b=1) {
    // if only 1 argument is provided, we need to swap thevalues of a and b 
    if (b === 1) {
       [a,b] = [b,a];
   }
   return Math.floor((b-a+1) * Math.random()) + a;
   }
   random(6);
//   << 4
   random(10,20);
//   << 13
function random(a,b,callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
   const result = Math.floor((b-a+1) * Math.random()) + a 
   if(callback) {
       result = callback(result);
   }
   return result;
}
// functions that return functions
function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}
// a general curry function
function curry(func,...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs,...newArgs];
        return func(...allArgs);
    }
}
const divider = (x,y) => x/y;

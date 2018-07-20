// // An exception is an error that produces a return value that can then be used by the program to deal with the error.
// unicorn();
// // ReferenceError: unicorn is not defined
// //An exception will also produce a stack trace.
// function three(){ unicorn(); }
// function two(){ three(); }
// function one(){ two(); }
// one();
// // << index.html:13 Uncaught ReferenceError: unicorn is ➥ not defined
// //     at three (index.html:13)
// //     at two (index.html:17)
// //     at one (index.html:21)
// //     at index.html:24`
// // Warnings
// // we want to see warning as a warning not as a bug
// pi = 3.142;
// //  strict 
// 'use strict';
// e = 2.718;
// // << ReferenceError: e is not defined
// function strictly(){
//     'use strict';
//     // function code goes here
//     }
//     (function() {
//         'use strict';
//         // All your code would go inside this function
//         }());
//         function amIOldEnough(age){
//             if (age = 12) {
//             alert(age);
//                 return 'No, sorry.';
//             } else if (age < 18) {
//                 return 'Only if you are accompanied by an adult.';
//             }
//             else {
//                 return 'Yep, come on in!';
//             } }
//             function amIOldEnough(age){
//                 console.log(age);
//                     if (age < 12) {
//                     console.log(`In the if with ${age}`);
//                     return 'No, sorry.';
//                     } else if (age < 18) {
//                     console.log(`In the else-if with ${age}`);
//                     return 'Only if you are accompanied by an adult.';
//                     } else {
//                     console.log(`In the else with ${age}`);
//                     return 'Yep, come on in!';
//                 } }

//                 function amIOldEnough(age){
//                     debugger;
//                         if (age < 12) {
//                         debugger;
//                         return 'No, sorry.';
//                         } else if (age < 18) {
//                         debugger;
//                         return 'Only if you are accompanied by an adult.';
//                         } else {
//                         debugger;
//                         return 'Yep, come on in!';
//                         function squareRoot(number) {
//                             'use strict';
//                             if (number < 0) {
//                     //        throw new RangeError('You can't find the square root of negative numbers')
//                                 }
//                             return Math.sqrt(number);
//                             };
//                             function imaginarySquareRoot(number) {
//                                 'use strict';
//                     let answer;
//                     try {
//                         answer = String(squareRoot(number));
//                     } catch(error) {
//                         answer = squareRoot(-number)+"i";
//                     } finally {
//  // testing is one of the most important parts of creating 

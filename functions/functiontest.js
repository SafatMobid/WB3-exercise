//test 1
"use strict";
function test1() 
{
 let a = 10;
 if (a > 5) {
 a = 7;
 }
 console.log("a = " + a);
}
test1();
//my guess = 7// answer = 7//

//test 2a
"use strict";
function test2A() {
 if (1 == 1) {
 var a = 5;
 }
 console.log("a = " + a);
}
test2A();
//5 // 5// 

//test 2b
//"use strict";
////"use strict";
//function test2B() {
 //if (1 == 1) {
// let a = 5;
// }
 //console.log("a = " + a);
//}
//test2B();
//NaN// a is not defined due to let//

//test 3
//"use strict";
//let a = 4;
//function test3() {
 //a = 3;
 //console.log("a = " + a);
//}
//test3();
//console.log("a = " + a);
//3 , 3// 3 , 3//

//test 4
//"use strict";
//let a = 4;
//function test4() {
 //let a = 7;
 //console.log("a = " + a);
//}
//test4();
//console.log("a = " + a);
//4 , 4// 7 , 4 //

//test 5 CHALLENGE//
//"use strict";
//let a = 4;
//function test5() {
// a = 7;
 //function again() {
 //let a = 8;
 //console.log("a = " + a);
 //}
 //again();
 //console.log("a = " + a);
//}
//test5();
//console.log("a = " + a);
//8 , 7, 4 // 8 , 7 , 7//

//test 6 CHALLENGE//
"use strict";
let a = 4;
function test6() {
 let a = 7;
 function again() {
 let a = 8;
 console.log("a = " + a);
 }
 again();
 console.log("a = " + a);
}
test6();
console.log("a = " + a);
// 7 , 7 , 4 // 8 , 7 , 4//
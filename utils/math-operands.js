import {showMessage} from "./utils/date-time-manager.js";
import moment from "moment";


let x = 100;
x = -x;
console.log(x);

let y = 1, z=3;
console.log(y-z);

// Addition +
// Subtraction -
// Multiplication *
// Division /
// Remainder %
// Exponentiation **


// javascript converts strings to number by any opereand else than +


let oranges = "2";
let apples = "3";

console.log(oranges + apples); // 23
console.log(+apples + +oranges); // 5

console.log(23 % 10);
console.log(34 % 10);
console.log(57 % 5);

console.log(2**3);
console.log(1 + "3");
console.log("2" * "3");
console.log('1' * '3');

// Numeric conversion, unary
let myNumber = -5;
console.log(+myNumber);
console.log(-myNumber);

let addition = 2 + 2 * 3;

let a, b, c;
a = b = c = 2 + 2; // assings 4 to all variables

// Modify in place
let m = 2;
m = m + 1; //3
console.log(m);
m += 5; //8
console.log(m);
m *= 2; //16
console.log(m);

let counter = 5;
counter++; //6
counter++; //6
counter--; //5
++counter;
--counter;

let fixedCounter = 5;
let newValue = ++fixedCounter;

console.log(newValue);

console.log("################################");
console.log("################################");


let e = 5;
let f = e++; // first assing e to f (5) than increment e by 1
console.log("value of e " + e);
console.log("value of f " + f);

let g = 10;
let h = ++g; // first increment g by 1 than assing it to h
console.log(h);
console.log(g);


let i = 5;
console.log(3 * i++);
console.log("value of i = " + i)
console.log("new value of i = " + i)
console.log(5 * ++i);
console.log("new value of i = " + i)
console.log(6 - ++i);
console.log("new value of i = " + i)
console.log(11 + i++);
console.log("new value of i = " + i)
console.log(15 * i++);
console.log("new value of i = " + i)
console.log(21 / ++i);
console.log("new value of i = " + i)

let bx;
let ax = (bx = 1 + 2 , 3 + 4);
console.log(ax);
console.log(bx);

for(xa = 1, bx = 3, cx = ax * bx; ax < 10; ax++){
}

let cx, dx = 3;



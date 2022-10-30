import {showMessage} from "./utils/date-time-manager.js";
import moment from "moment";

// ### VARIABLES ###
moment().format();
showMessage();

const COLOR_RED = "#F00";
const IMPLICIT_WAIT = 1000;
// IMPLICIT_WAIT=1001; Cant change const



console.log("Hello Javascript");
let message;
message  = "Hello";
console.log(message);

let user = "John", 
    age = 25, 
    tag = "Hello";

// let user = "John";
// let age = 25;
// let tag = "Hello";
// let user = "Bill";

user = "Bill";

console.log(user + age + tag);

let $ = 3;
let _ = 5;

console.log($ + _);

// let 1a; // Wrong Approach
// let my-name; // Wrong Approach

// let let = 5;
// let return = 5;

const myBirthday = "28.09.1986";
// myBirthday = "01.01.2022"; // Not allowed to change constant

console.log(myBirthday);


// let = var
// var message = "Hello"; = let message = "hello";

// ### DATA TYPES ###

let firstMessage = "Hello";
firstMessage = 123456;

let n = 123;
n = 1.23;

console.log(1 / 0 );

console.log("not a number" / 1);

let computeError = "not a number" / 1;

console.log(computeError + " First Nan");

computeError += 1;

console.log(computeError + " Second Nan");

// console.log(NaN + 1); // NaN

let bigIntNumber = 9007199254740991n; // 2^53 -1
console.log(bigIntNumber + 2n);

console.log(1233 + 12314);
console.log(12312413412141234143n + 123n);
// console.log(1123123123123 + 1n); > Compile error.

const veryBigInt = 1234567890123456789012345678901234567890n;

let str = "#############";
let str2 = 'single quotes are OK too';
let phase = `can be embed another ${str}`;
let phaseNumber = `can be embed another ${1 + 2}`;

console.log(phase);
console.log(phaseNumber);

let phaseNumberIncorrect = "can be embed another ${1 + 2}";
console.log(phaseNumberIncorrect);

let nameFieldChecked = true;
let ageFieldCheckted = false;

let isGreater = 4 > 1;

console.log(isGreater);

let ageNull = null; // "nothing", "empty", "value unknown"

let ageUd;
console.log(ageUd);
console.log(ageNull);

let ageDef = 100;
ageDef = undefined;
console.log(ageDef);

console.log("######################");
console.log(typeof undefined);
console.log(typeof 0); //number
console.log(typeof 10n); //number
console.log(typeof true); //boolean
console.log(typeof "foo"); //string
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof("foo"));
console.log("######################");


let nameExample = "John";
console.log(`hello ${1 + 1}`); // 
console.log(`hello ${"name"}`); // 
console.log(`hello ${nameExample}`); //hello John


console.log("##### TYPE CONVERSION #####");


console.log("6" / "2");
console.log("6" / 2);

console.log("##### TYPE CONVERSION SAMPLE #####");
let ourNumberString = "123";
console.log(typeof ourNumberString);
let ourNumber = Number(ourNumberString);
console.log(typeof ourNumber);

console.log(ourNumber + ourNumberString);

console.log(Number(true));
console.log(Number(false));

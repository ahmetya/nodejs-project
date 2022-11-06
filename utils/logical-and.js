
console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false


console.log("###############");

let a = 1;
let b = 2;
let c = 3;
let d = 4;

if (b > a || c > d) {
    console.log("Statement 1 !!!");
}

if (3 === "3" || 2 < 1) {
    console.log("Statement 2 !!!");
}

if(1 || 0){
    console.log("Statement 3 !!!");
}

let hour = 9;

if(hour < 10 || hour > 18){
    console.log("Office is Closed !!");
}

let newHour = 12;
let isWeekend = true;

let result = hour < 10 || hour > 18 || isWeekend;

if(result){
    console.log("The office is closed.");
}

console.log("####################");
console.log(undefined || null || 1);


let firstName = "";
let lastName = "";
let nickName = "Anonymous"

console.log(firstName || lastName || nickName);


// && AND

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false



console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false


let hour = 12;
let minute = 30;

if(hour == 12 && minute == 30){
    console.log("The time 12:30 !!!");
}

if(1 && 0){
    console.log("Wont Work because it is falsy");
}

// let result = val1 && val2 && val3;

console.log("############");
console.log(1 && 0 ); // 0
console.log(1 && 5); // 5
console.log(null && 5); //null
console.log(0 && "No matter what"); // 0
console.log("############");


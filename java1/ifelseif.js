//conditional statement
//odd or even
let num = 20;

if (num % 2 == 0) {
    console.log(num, "is even");
}
else {
    console.log(num, "is odd");
}

//else if statement

let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
else if (mode === "blue") {
    color = "blue";
}
else if (mode === "pink") {
    color = "pink";
}
else {
    color = "white";
}
console.log(color);
//-------------------------------------

//operator in js
//ternary operator
//  condition ? true output:false output;   
let age = 15;
age >= 18 ? "adult" : "not adult";// simpler, compact if-else

//mdn documents
// let fullname ="varsha thakur";
// prompt("fullname");

//----------------------------------------------------
// practice que 1

let num1 = prompt("enter a number :");

if (num1 % 5 == 0) {
    console.log(num1, "is a multiple of 5");
} else {
    console.log(num1, "is not multiple of 5");
}
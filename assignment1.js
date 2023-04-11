// Q#1
let number1 = +prompt("Enter 1st number");
let number2 = +prompt("Enter 2nd number");
console.log("your 1st number is " + number1 + " and your 2nd number is "+ number2 );

//Q#2
let number3 = +prompt("Enter a signed number")
if (number3 >= 0) {console.log(" The sign is +")}
else{console.log(" The sign is -")}

//Q#3
let Q3number1 = +prompt("Enter 1st number for Q#3");
let Q3number2 = +prompt("Enter 2nd number for Q#3");
let Q3number3 = +prompt("Enter 3rd number for Q#3");
let Q3number4 = +prompt("Enter 4th number for Q#3");
let Q3number5 = +prompt("Enter 5th number for Q#3");
console.log("your 1st number is " + Q3number1 + " and your 2nd number is "+ Q3number2 + "your 3rd number is " + Q3number3 
             + "and your 4th number is "+ Q3number4 +" and your 5th number is "+ Q3number5);

//Q#4
for(let i = 0 ; i <=15 ; i++ )
{
    if (i % 2 === 0) { console.log(" '' " + i + " is even ''")}
    else { console.log(" '' " + i + " is odd ''")}
}

//Q#5
let marks = +prompt("Enter your marks");
if (marks <=59){console.log("your grade is F and your marks are " + marks)}
else if (marks <=69 && marks >=60){console.log("your grade is D and your marks are " + marks)}
else if (marks <=79 && marks >=70){console.log("your grade is C and your marks are " + marks)}
else if (marks <=89 && marks >=80){console.log("your grade is B and your marks are " + marks)}
else if (marks <=99 && marks >=90){console.log("your grade is A and your marks are " + marks)}

//Q#6
for(let i = 0 ; i <=100 ; i++ )
{
    if (i % 3 === 0 && i % 5 === 0) { console.log("FIZZ-BUZZ")}
    else if (i % 3 === 0 ) { console.log("FIZZ")}
    else if (i % 5 === 0 ) { console.log("BUZZ")}
    else {console.log( i + " is not multiple of either 3 or 5 ")}
}

//Q#7
for (let i = 1; i <= 8; i++) {
  let pattern = '';
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }  
  console.log(pattern);
}
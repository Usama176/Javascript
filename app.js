// Chapter one Making an Alert

alert("Welcome To The Javasript First Assigment")

// Following are the Objects with properties and let is variable type
let boy = {
    name: 'Usama',
    age: 20,
    education: 'FSC'
};

// Now changing the value of the properties
boy.name = 'Arsalan';
console.log(boy);

let girl = {
    name: 'Emily',
    age: 18,
    education: 'FSC'
};

// Now changing the value of the property by another way
girl['name'] = 'Elsa';
console.log(girl);

// -----------------------------------------------------

// Now using Var variable type
var firstName = 'Talha ';
var lastName = 'Shah';
var age = 'Age is '
var ageNo = 18;
var fullName = firstName + lastName;
var hisAge = age + ageNo;
console.log(fullName);
console.log(hisAge);

// -------------------------------------------------

// Arrays in Javascript
let cookingItems = ['Rice', 'Chicken', 'Tamato'];

// Salt is added after making array
cookingItems[3] = 'Salt';
console.log(cookingItems);

// Now it will show me in table
console.table(cookingItems);

// Now displaying the item values
console.log(cookingItems[3]);

// -------------------------------------------------------------------

// Now using functions of javascript
function welcome(name) {
    console.log('Welcome to my javascript tutorial' + ' ' + name)
}
// calling function and passing argument which name
welcome('Hey my name is usama and i am a software engineer');

// Making a function which will return a value
function qube(number) {
    return number * number * number;
}
let num = qube(2);
console.log(num);

// Another function
function sum(num1, num2) {
    let z = num1 + num2;
    return z;
}
let total = sum(5, 2);
console.log(total);

// --------------------------------------

// Now moving on Conditions 
let numbers = [1, 2, 3, 4, 1, 2, 3, 4];
if (numbers[1] == numbers[6]) {
    console.log('yes');
} else if (numbers[0] == numbers[4]) {
    console.log('First one is not matching but 0 and 4 mathes')
};
// -----------------------------------------------------------------

// If else statements

let arr = [1, 2, 3, 4, 5, 6, 7];
let a = "Pakistan";
for (let i = 0; i < arr.length; i++) {
    if (i == 2) {
        continue;
    } else if (i == 4) {
        continue;
    }
    console.log(arr[i])
};

// -----------------------------------------

// Date function in Javasript
let myDate = new Date();
console.log(myDate);


// --------------------------------------------------------------

// Now moving on Loops
let i = 0;
while (i < 6) {
    console.log('Pakistan Zinadabad' + ' ' + i);
    i++;
};

// Do while loops
let t = 2;
do {
    console.log("Hello World" + t);
    t++;
}
while (t < 6);

// For Loops
for (let r = 0; r < 7; r++) {
    console.log("How are you" + r)
};

// -------------------------------------

// Now converting data types
let myNum = String(1234);
console.log(myNum, typeof myNum)

let myString = Number("1234");
console.log(myString, typeof myString);

let myBoolean = String(true);
console.log(myBoolean, typeof myBoolean);

let myArray = String([1, 2, 3, 4, 5]);
console.log(myArray, typeof myArray);



// Another way

let myNum2 = 12345;
console.log(myNum2.toString());

// -------------------------------------------

//string Concatination

let myHtml = "<h1>hello world</h1> " +
    "<P>this my paragraph</p>";
console.log(myHtml);
let = html = myHtml.concat('now i am concatinating');
console.log(html);

// -----------------------------------------------------
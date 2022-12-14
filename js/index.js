//Declare String Variables
var myFirstName = "Gama";
var myLastName = "Sirengo";
console.log(myFirstName, myLastName)

//Understanding Uninitialized Variables
var a = 5;
var b = 10;
var c = 'I am a';

a = a + 1;
b = b + 5;
c = c + " String!";

//Understanding Case Sensitivity in Variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Explore Differences Between the var and let Keywords
let catName = "Oliver";
let catSound = "Meow!";

//Declare a Read-Only Variable with the const Keyword
const FCC = "freeCodeCamp"; 
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact); 

//Add Two Numbers with JavaScript
const sum = 10 + 10;

//Subtract One Number from Another with JavaScript
const difference = 45 - 33;

console.log(catName, difference,sum)

//Multiply Two Numbers with JavaScript
const product = 8 * 10;

//Divide One Number by Another with JavaScript
const quotient = 66 / 33;

//Increment a Number with JavaScript
let myVar = 87;
myVar ++;

//Decrement a Number with JavaScript
let myVar2 = 11;
myVar2--;
console.log(myVar, myVar2)

//Create Decimal Numbers with JavaScript
const ourDecimal = 5.7;
var myDecimal = 4.2;
//Multiply Two Decimals with JavaScript
const products = 2.0 * 2.5;

//Divide One Decimal by Another with JavaScript
const quotient2 = 4.4 / 2.0; 

//Finding a Remainder in JavaScript
const remainder = 11 % 3;
console.log(remainder)

//Compound Assignment With Augmented Addition
let myVarr = 1;
myVarr += 5;
console.log(myVarr);

//Compound Assignment With Augmented Subtraction

myVarr -= 5;
console.log(myVarr);
//Compound Assignment With Augmented Multiplication

myVarr *= 5;
console.log(myVarr);

//Compound Assignment With Augmented Division

myVarr /= 5;
console.log(myVarr);
//Escaping Literal Quotes in Strings
const myStr = "I am a  \"double quoted\" string inside \"double quotes\".";
console.log(myStr)

//Quoting Strings with Single Quotes
const myStrr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStrr)


//Escape Sequences in Strings
const myyStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myyStr)

//Concatenating Strings with Plus Operator
const myString = "This is the start " + "This is the end";

//Concatenating Strings with the Plus Equals Operator
let myStre = 'This is the first sentence.';
myStre += 'This is the second sentence.';

//Constructing Strings with Variables
const myName = "Gamaliel S ";
const myStrt = "My name is " + myName;
console.log(myStrt)

//Appending Variables to Strings
const someAdjective = "tress";
let mySter = "Learning to code is ";

console.log(mySter += someAdjective)

//Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastNamee = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastNamee[0]; 
//Understand String Immutability
let myStrty = "Jello World";

// Only change code below this line
myStrty = "Hello World"; 

// //Use Bracket Notation to Find the Nth Character in a String
// const lastNaamee = "Lovelace";
// ThirdLetterOfLastName = lastNaamee[2]; 

//Use Bracket Notation to Find the Last Character in a String
const laatName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = laatName[laatName.length - 1];
console.log(lastLetterOfLastName)

//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "This " + myAdjective + " fat " + myNoun + " yesterday " + myVerb + " " + myAdverb + " quickly towards me.";

console.log(wordBlanks)

//Store Multiple Values in one Variable using JavaScript Arrays

const myArray = ["hey", 1];
//Nest one Array within Another Array
myNestedArray = [["my", 3], ["my", 2], ["my nested", 1]];
console.log(myNestedArray)

//Access Array Data with Indexes

const mstr = 'Technically';
const arra = [11,12,23,345,56];

let mstr1 = mstr[3]
let arra1 = arra[3]
console.log(mstr1, arra1)

//Modify Array Data With Indexes

const ourArray = [50, 40, 30];
ourArray[0] = 15;
console.log(ourArray)

//Access Multi-Dimensional Arrays With Indexes
const ara = [
    [1,2,3,4],
    [5,6,7,8],
    [[12,14,15], [16,17,18]]
];

let data = ara[1][3]
console.log(data)

//Manipulate Arrays With push()
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2)
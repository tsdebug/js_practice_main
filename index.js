// 1. Ways to print in JavaScript
// console.log("Hello World !");
// alert("me");
// document.write("This is document write.");

// 2. JavaScript console API
// console.log("Hello World", 4+6, "Another log");
// console.warn("This is a warning !");
// console.error("This is an error.")

// single line comment
/* multi
line
comments
*/

// 3. JavaScript Variables
// What are variables ? - Containers to store values
var num1 = 34;
var num2 = 56;
// console.log(num1 + num2);

// 4. Data Types in JavaScript
//string
var str1 = "This is a string";
var str2 = "This is also a string";

//number
var num1 = 455;
var num2 = 56.76;

//Objects
var marks = {
    Tanu: 90,
    Dona: 80,
    Harry: 70.97 
}
// console.log(marks);
/*
At a very high level there are two types of data types in JavaScript
1. Primitive data types: numbers, strings, null, undefined, boolean, symbol
2. Reference data types: object, array, function
*/

// 5. Operators in JavaScript
// Arithematic Operators
var a = 34;
var b = 56;
console.log("The value of a + b is ", a+b);
console.log("The value of a - b is ", a-b);
console.log("The value of a * b is ", a*b);
console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
c += 2;
console.log(c);

// Comparison Operators: ==, >, <, <=, >=
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators: ||(Or) , &&(And) ,  !(Not)
console.log(! false);

// Functions
// DRY - Do not Repeat Yourself
function avg(a,b){
    return (a+b)/2 ;
}

c1 = avg(4, 6);
c2 = avg(180, 12);
// console.groupCollapsed(c1, c2);

// Conditionals in JavaScript
// Single if statements
// if-else statements
//if-else latter
var age = 4;
if (age > 8){
    console.log("You are not a kid.");
}
else{
    console.log("You are a kid.");
}

// Loops
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

console.log("Next method");

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}

console.log("Next method"); 

arr.forEach(function(element){
    console.log(element);
})

// const ac = 0;
// ac = ac +1;
// ac++
console.log("Next method"); 

let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++
}

do{
    console.log(arr[j]);
    j++
} while(j < arr.length);

//Break statement
for(var i=0; i<arr.length; i++){
    if(i==2){
        break;
    }
    console.log(arr[i])
}

//Continue statement
for(var i=0; i<arr.length; i++){
    if(i==2){
        continue;
    }
    console.log(arr[i])
}

//Array methods
let myArr = ["Fan", "Camera", 34, null, true];
//length- to get number of elements
console.log(myArr);
console.log(myArr.length);

//Pop- to remove element from the end
myArr.pop()
console.log(myArr);
console.log(myArr.length);

//Push- to add an element to the end of the array
myArr.push("Tanu")
console.log(myArr);

//Shift- to remover element from the start of the array
myArr.shift()
console.log(myArr);

//unshift- to add element at the start of the array
myArr.unshift("Me")
console.log(myArr);

// Strings methods in JavaScript
let myStr = "Harry is a good person, really good.";
//length
console.log(myStr.length);

//index
console.log(myStr.indexOf("good"));
console.log(myStr.lastIndexOf("good"));

//slicing
console.log(myStr.slice(0,3));

// Replace
d = myStr.replace("Harry", "Rohan");
console.log(d, myStr);

//Dates and it's methods
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime()); //in seconds
console.log(myDate.getFullYear()); //gives year
console.log(myDate.getDay()); // day in numbers, starting from Sunday as 0
console.log(myDate.getMinutes()); //in min
console.log(myDate.getHours());//in hours

//DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
elemClass[0].style.background = "yellow";
console.log(elem.innerHTML);
console.log(elem.innerText);

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para."
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold.";
tn[0].replaceChild(createdElement2, createdElement);

//removeChild(element); ---> removes an element 

//Selecting using Query
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);

function clicked(){
    console.log("The button was clicked")
}
window.onload = function(){
    console.log('The document was loaded')
}

//Events in Javascript
// firstContainer.addEventListener('click', function(){
//     console.log('Clicked on container');
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse on container');
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log('Mouse out of container');
// })
        
// firstContainer.addEventListener('mouseup', function(){
//     console.log('Mouse up when clicked on container');
// })

// firstContainer.addEventListener('mousedown', function(){
//     console.log('Mouse down when clicked on container');
// })

// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log('Clicked on container');
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container");
})

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>";
    console.log("Mouse down when clicked on Container");
})

// Arrow functions
// function summ(a,b){
//     return a+b;
// }
summ = (a,b) =>{
    return a+b;
}
// SetTimeout and SetInterval
logKaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired</b>";
    console.log("I am your log")
}
setTimeout(logKaro, 2000);
clr = setInterval(logKaro, 2000); // when want to stop --> clearInterval(clr);
//Use clearInterval(clr)/clearTimeout(clr) to cancle setInterval/setTimeout

//JavScript localSettings
// localStorage.setItem('name', 'Tanu');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

//JSON --> JavaScript Object Notation (Open-standard file format, used to exchange data)
obj = {name:"Tanushree", "length":1, a: {this: 'tha"t'}};
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);

parsed = JSON.parse(`{"name":"Tanushree","length":1,"a":{"this":"that"}}`)
console.log(parsed);  

//Template literals - Backticks
a = 34;
console.log(`This is my ${a}`)
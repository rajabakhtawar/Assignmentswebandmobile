// Question 1 

// function time(){
//     var currentDate = new Date();
//     document.write(currentDate+"<br />");
// }
// time();


// Question 2 

// function greeting (firstName,lastName){
//     var fullName = firstName + " " + lastName;
//     alert("Welcome "+fullName)
// }
// greeting(prompt("Enter first name?"), prompt("Enter last name?"));


// Question 3 

// function add(a, b) {
//     var c = a + b;
//     return c;
// }
// var d = add(+prompt("Enter first number?"), +prompt("Enter second number?"));
// alert(d)


// Question 4 

// function calculator(num1, operator, num2) {
//     if (operator === '+') {
//         return num1 + num2;
//     }
//     else if (operator === '-') {
//         return num1 - num2;
//     }
//     else if (operator === '*') {
//         return num1 * num2;
//     }
//     else if (operator === '/') {
//         return num1 / num2;
//     }
//     else if (operator === '%') {
//         return num1 % num2;
//     }
//     else {
//         return "Invalid operator";
//     }
// }
// var res = calculator(+prompt("Enter first number?"), prompt("Enter any operator?"), +prompt("Enter second number?"));
// alert(res);


// Question 5



// function square(number) {
//     return number ** 2;
// }
// var ans = square(+prompt("Enter any number?"));
// alert(ans);


// Question 6 

// function factorial(x) {
//     if (x === 0) {
//         return 1;
//     }
//     else {
//         return x * factorial(x - 1)
//     }
// }
// var answer = factorial(+prompt("Enter any number to get it's factorial?"));
// alert(answer);


// Question 7 

// function counting(starting, ending) {
//     let arr = [];
//     for (let i = starting; i <= ending; i += 1) {
//         arr.push(i);
//     }
//     return arr;
// }
// var result = counting(+prompt("Enter starting number?"), +prompt("Enter ending number?"));
// alert(result)


// Question 8 

// function hypotenuse(base, perpendicular) {        // outer function
//     function square(num) {                        // inner function
//         return num ** 2;
//     }
//     return (square(base) + square(perpendicular)) ** 2;
// }
// var result = hypotenuse(+prompt("Enter base?"), +prompt("Enter perpendicular?"));
// alert(result);


// Question 9 

// function area(width, height) {
//     var area = width * height;
//     return area;
// }
// var result = area(+prompt("Enter width of a rectangle?"), +prompt("Enter height of a rectangle?"));
// alert(result);


// Question 10


// function palindrome(word) {
//     var check = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//         check += word[i];
//     }
//     if (word === check) {
//         alert(word + " is a palindrome word");
//     }
//     else {
//         alert(word + " is not a palindrome word");
//     }
// }
// palindrome(prompt("Enter something?"));


// Question 11 

// function upperCase(text)
// {
//   var array1 = text.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//   return newarray1.join(' ');
// }
// alert(upperCase(prompt("Enter something?")));


// Question 12


// function longestWord(text){
//   var array1 = text.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++){
//       if(result.length < array1[x].length){
//         result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(longestWord(prompt("Enter something?")))



// Question 13
// function charCount(str, letter) 
// {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter){
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// alert(charCount(prompt("Enter something?"), prompt("what to check")));



// Question 14


function calcCircumference(radius){
    var circumference = (2 * Math.PI * radius);
    return "The circumference is "+circumference
}
function calcArea(radius){
    var area = (Math.PI * (radius ** 2));
    return "The area is "+area
}
alert(calcCircumference(+prompt("Enter radius of a circle?")));
alert(calcArea(+prompt("Enter radius of a circle?")));




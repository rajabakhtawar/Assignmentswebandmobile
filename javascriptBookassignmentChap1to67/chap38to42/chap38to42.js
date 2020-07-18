// Question 1

// function power(a, b) {
//     var c = a ** b;
//     alert(c);
// }
// power(5, 2)


// Question 2 

// function leapYear() {
//     var enteredYear = +prompt("Enter any to check whether it is leap year or not?");
//     if (enteredYear % 4 == 0) {
//         alert(enteredYear + " is a leap year");
//     }
//     else {
//         alert(enteredYear + " is not a leap year");
//     }
// }
// leapYear();

// Question 3 

// var a = +prompt("Enter the value of a side");
// var b = +prompt("Enter the value of b side");
// var c = +prompt("Enter the value of c side");
// function trianglePerimeter() {
//     S = (a + b + c) / 2;
//     alert("Half of triangle is " + S);
// }
// function Area() {
//     var area = Math.sqrt(S * ((S - a) * (S - b) * (S - c)));
//     alert("Area of triangle is " + area);
// }
// trianglePerimeter();
// Area();


// Question 4 

// var sub1Marks = +prompt("Enter marks of first subject:");
// var sub2Marks = +prompt("Enter marks of second subject:");
// var sub3Marks = +prompt("Enter marks of third subject:");
// var totalMarks = 300;
// function mainFunction() {
//     function average() {
//         var averageMarks = (sub1Marks + sub2Marks + sub3Marks) / 3;
//         alert("Average is " + averageMarks);
//     }
//     function percentage() {
//         var percentage = ((sub1Marks + sub2Marks + sub3Marks) / totalMarks) * 100;
//         alert("Percentage is " + percentage + "%");
//     }
//     average();
//     percentage();
// }
// mainFunction();

// Question 5 


// function checkIndex(){
//     var a = prompt("Enter any string:");
//     alert(a.indexOf(prompt("Enter character to check it's index number:")));
// }
// checkIndex();


// Question 6 

// function deleteVowels() {
//     var sentence = prompt("Enter any sentence:");
//     if (sentence.length <= 25) {
//         var newSentence = sentence.replace(/[aeiou]/gi, '');
//         alert("The new sentence is " + newSentence);
//     }
//     else {
//         alert("Your sentence is much longer");
//     }
// }
// deleteVowels();


// Question 7 

// var str = "Pleases read this application and give me gratuity";
// var char;
// var count = 0;
// switch (char) {
//     case 'ea':
//         count++
//     case 'ea':
//         count++
//     case 'ai':
//         count++;
//         break
//     default:
//         count++
//         break
// }
// alert(count)


// Question 8 

// var distance = +prompt("Enter the distance between two cities:", "in km.");
// function meters() {
//     var meters = 1000;
//     alert("The distance is " + (distance * meters) + " in meters");
// }
// function feet() {
//     var feet = 3280.84;
//     alert("The distance is " + (distance * feet) + " in feet");
// }
// function inches() {
//     var inches = 39370.1;
//     alert("The distance is " + (distance * inches) + " in inches");
// }
// function centiMeters() {
//     var centiMeters = 100000;
//     alert("The distance is " + (distance * centiMeters) + " in centimeters");
// }
// meters();
// feet();
// inches();
// centiMeters();


// Question 9 
// var count = 1;
// var workingHours, overTime, overTimePay;
// while (count <= 5) {
//     workingHours = +prompt("Enter the working hours of employ no: " + count);
//     if (workingHours > 40) {
//         overTime = workingHours - 40;
//         overTimePay = overTime * 12;
//         alert("Employ no " + count + " over time pay is " + overTimePay);
//     }
//     else {
//         alert("You have to work for more than 40 hours to get over time pay");
//     }
//     count++;
// }


// Question 10

var amountWithdraw = +prompt("Enter the amount to withdraw !!");
alert("You will have "+(amountWithdraw / 100)+" 100 notes "+((amountWithdraw % 100) / 50)+" 50 notes "+(((amountWithdraw % 100) % 50) / 10)+" 10 notes");





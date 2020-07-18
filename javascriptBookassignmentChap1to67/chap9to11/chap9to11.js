// Question 1
        // var userInput = prompt("Enter the name of city");
        // var a = userInput.toLocaleLowerCase();
        // if(a == "karachi"){
        //     alert("Welcome to the city of lights")
        // }
        // else{
        //     alert("You are not in the city of lights")
        // }

        // Question 2

        // var userInput = prompt("Enter Your Gender Please");
        // var a = userInput.toLocaleLowerCase();
        // if(a == "male"){
        //     alert("Hello Sir");
        // }
        // else{
        //     alert("Hello Madam")
        // }

        // Question 3 

        // var userInput = prompt("Enter the color of the Traffic Signal");
        // var a = userInput.toLocaleLowerCase();
        // if(a == "red"){
        //     alert("Must Stop")
        // }
        // else if(a == "yellow"){
        //     alert("Ready to Move")
        // }
        // else if(a == "green"){
        //     alert("Move Now")
        // }
        // else{
        //     alert("Enter the correct signal color")
        // }


        // Question 4

        // var userInput = +prompt("Enter the Remaining Amount of Fuel in litres");
        // if(userInput < 0.25){

        //     alert("Refill Your Car")
        // }
        // else{
        //     alert("No need to refill")
        // }

        // Question 5

        // var a = 4;
        // if (++a === 5) {
        //     alert("given condition for variable a is true");
        // }
        // document.write("This will Run")

        // var b = 82;
        // if (b++ === 83) {
        //     alert("given condition for variable b is true");
        // }
        // document.write("This will not Run")


        // var c = 12;
        // if (c++ === 13) {
        //     alert("condition 1 is true");
        // }
        // if (c === 13) {
        //     alert("condition 2 is true");
        // }
        // if (++c < 14) {
        //     alert("condition 3 is true");
        // }
        // if (c === 14) {
        //     alert("condition 4 is true");
        // }

        // document.write("Condition 3 is true")


        // var materialCost = 20000;
        // var laborCost = 2000;
        // var totalCost = materialCost + laborCost;
        // if (totalCost === laborCost + materialCost) {
        //     alert("The cost equals");
        // }

        // document.write("Correct")


        // if (true) {
        //     alert("True");
        // }
        // if (false) {
        //     alert("False");
        // }

        // document.write("First Condition will Run")


        // if ("car" < "cat") {
        //     alert("car is smaller than cat");
        // }

        // document.write("Yes This is Running")



        // Question 6 

        // document.write("<h1>"+"Marks Sheet"+"</h1>")

        // var a = +prompt("Enter the Marks of first subject");
        // var b = +prompt("Enter the Marks of second subject");
        // var c = +prompt("Enter the Marks of third subject");
        // var totalMarks = 300;
        // var obtMarks = a + b + c
        // var percentOfStudents = (obtMarks/totalMarks)*100;
        // document.write("Percentage of students is"+" "+percentOfStudents+"<br/>")
        // if(percentOfStudents >= 80){
        //     document.write("Grade :"+" "+"A+"+"<br/>"+"Remarks :"+" "+"Excellent")
        // }
        // else if (percentOfStudents >= 70){
        //     document.write("Grade :"+" "+"B+"+"<br/>"+"Remarks :"+" "+"Good")

        // }
        // else if (percentOfStudents >= 60){
        //     document.write("Grade :"+" "+"C+"+"<br/>"+"Remarks :"+" "+"You need to improve")

        // }
        // else if (percentOfStudents < 60){
        //     document.write("Grade :"+" "+"F"+"<br/>"+"Remarks :"+" "+"You need to improve")
        // }
        // else{
        //     document.write("You are Fail")
        // }


        // Question 6


        // var num = 7;
        // var a = +prompt("Guess the secret number between range 1 to 10");
        // if (a >= 7) {
        //     alert("Bingo! Correct")
        // }
        // else{
        //     alert("Close enough to the correct answer")
        // }


        // Questiom 7 
        //    var a = +prompt("Enter the number you want to check");
        //    if(a % 3 == 0){
        //        alert("It is divisible by 3")
        //    }
        //    else{
        //        alert("It is not divisible by 3")
        //    }


        // Question 8 
        // var a = +prompt("Enter the number you want to check");
        // if (a % 2 == 0) {
        //     alert("It is even number")
        // }
        // else {
        //     alert("It is an odd number")
        // }


        // Question 9

        // var a = +prompt("Enter the Temperature");
        // if(a >= 40){
        //     alert("Its too hot outside")
        // }
        // else if(a >= 30){
        //     alert("Its Normal")
        // }
        // else if(a >= 20){
        //     alert("Todays  Weather is cool")
        // }
        // else if(a >= 10){
        //     alert("OMG! Today’s weather is so Cool.")
        // }
        // else{
        //     alert("Write the correct temperature")
        // }

        // Question 10 

        var a = +prompt("Enter the First Number");
        var b = +prompt("Enter the Second Number");
        var operation = prompt("Enter the Operator");

        if(operation == "+"){
            alert(a+b)
        }
        else if(operation == "-"){
            alert(a-b)
        }
        else if(operation == "*"){
            alert(a*b)
        }
        else if(operation == "/"){
            alert(a/b)
        }
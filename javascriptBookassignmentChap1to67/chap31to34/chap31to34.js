        // QUestion 1

        // var a = new Date;
        // document.write("<h1>"+a+"</h1>");


        // Question 2 


        // var a = new Date;
        // var b = a.getMonth();
        // var months  = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        // if(b == 0){
        //     alert("January");
        // }
        // else if(b == 1){
        //     alert("February");
        // }
        // else if(b == 2){
        //     alert("March");
        // }
        // else if(b == 3){
        //     alert("April")
        // }
        // else if(b == 4){
        //     alert("May")
        // }
        // else if(b == 5){
        //     alert("June")
        // }
        // else if(b == 6){
        //     alert("July")
        // }
        // else if(b == 7){
        //     alert("August")
        // }
        // else if(b == 8){
        //     alert("September")
        // }
        // else if(b == 9){
        //     alert("October")
        // }
        // else if(b == 10){
        //     alert("November")
        // }
        // else if(b == 11){
        //     alert("December")
        // }


        // Question 3


        // var a = new Date;
        // var b = a.getDay();
        // if (b == 0) {
        //     alert("Sun")
        // }
        // else if (b == 1) {
        //     alert("Mon")
        // }
        // else if (b == 2) {
        //     alert("Tue")
        // }
        // else if (b == 3) {
        //     alert("Wed")
        // }
        // else if (b == 4) {
        //     alert("Thu")
        // }
        // else if (b == 5) {
        //     alert("Fri")
        // }
        // else if (b == 6) {
        //     alert("Sat")
        // }



        // Question 4 

        // var a = new Date;
        // var b = a.getDay();
        // if (b == 0 || b == 6){
        //     document.write("Its a Fun Day")
        // }
        // else{
        //     alert("Do Your Work")
        // }


        // Question 5 

        // var a = new Date;
        // var b = a.getDate(); 
        // if(b <= 16){
        //     document.write("<h1>"+"First Fifteen Days Of Month"+"</h1>")
        // }
        // else{
        //     document.write("<h1>"+"Last Days Of The Month"+"</h1>")
        // }



        // Question 6 

        // var a = new Date;
        // var b = a.getTime();
        // document.write("Current Date" + " " + a + "<br/>" + "Elapsed Milliseconds since jan 1" + b + " " + "<br/>" + "Elapsed Minutes since jan 1" + b / 600000)



        // Question 7 

        // var a = new Date;
        // var b = a.getHours();
        // if(b >= 12){
        //     alert("Pm")
        // }
        // else{
        //     alert("Am")
        // }

        // Question 8 

        // var a = new Date("Dec 31 , 2020");
        // document.write(a)


        // Question 9 

        // var a = new Date("June 18 , 2015")
        // var b = new Date;
        // var c = a.getTime();
        // var d = b.getTime();
        // var e = c-d;
        // var f = (1000*60*60*24)/e;
        // document.write(f)


        // Question 10

        // var startingDate = new Date("Apr 24, 2020");
        // var getDays = new Date("Jun 16, 2020");
        // var diffDays = ((getDays - startingDate) / (1000 * 60 * 60 * 24));
        // document.write("<br />" + diffDays + " days have passed since 1st Ramadan, 2020 " + "<br />");


        // Question 11 


        // var refrenceDate = new Date();
        // var beginning = refrenceDate.getTime();
        // document.write("<br /> On refrence date: " + refrenceDate + "<br />");
        // document.write(Math.ceil(beginning / (1000 * 60 * 60)) + " seconds have passed since beginning of 2020" + "<br />");

        // Question 12
        // var currentDate = new Date();
        // document.write("<br /> Current date: " + currentDate + "<br />");
        // currentDate.setHours(currentDate.getHours() - 1);
        // document.write("1 hour ago, it was " + currentDate + "<br />");


        // Question 13


        // var currentDate = new Date();
        // document.write("<br /> Current date: " + currentDate + "<br />");
        // currentDate.setHours(currentDate.getHours() - 876576);
        // document.write("100 years ago, it was " + currentDate + "<br />");


        // var userAge = +prompt("Enter your age?");
        // var year = new Date();
        // var currentYear = year.getFullYear();
        // var birthYear = currentYear - userAge;
        // document.write("<br /> Your age is: " + userAge + "<br />");
        // document.write("Your birth year is " + birthYear + "<br />");


        // Question 14


        // var customerName = prompt("Enter customer name?");
        // var currentMonth = prompt("Enter current month?");
        // var numberOfUnits = +prompt("Enter number of units?");
        // var chargesPerUnit = +prompt("Enter charges per unit?");
        // var netAmountPayable = numberOfUnits * chargesPerUnit;
        // var latePaymentSurcharge = +prompt("Enter late payment surcharge?");
        // var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
        // document.write("<br /><h3>K-Electric Bill</h3>");
        // document.write("Customer Name: " + customerName + "<br />");
        // document.write("Month: " + currentMonth + "<br />");
        // document.write("Number of units: " + numberOfUnits + "<br />");
        // document.write("Charges per unit: " + chargesPerUnit + "<br />");
        // document.write("<br /> Net Amount Payable (within Due Date): " + netAmountPayable + "<br />");
        // document.write("Late payment surcharge: " + latePaymentSurcharge + "<br />");
        // document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable + "<br />");
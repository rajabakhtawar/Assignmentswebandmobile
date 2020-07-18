// Question 1
        // var a = 10;
        // document.write("<h1>"+"Result:"+"</h1>"+"</br>")
        // document.write("<h1>"+"The Value of a is"+" "+a+"</br>")
        // document.write("-------------------------------------"+"</br>")
        // document.write("The Value of ++a is now:"+" "+ ++a +"</br>")
        // document.write("The Value of a is now" +" "+ a + "</br>")
        // document.write("The Value of a++ is :"+" "+ a++ + "</br>")
        // document.write("The Value of a is now" +" "+ a + "</br>")
        // document.write("The Value of --a is :"+" "+ --a + "</br>")
        // document.write("The Value of a is now" +" "+ a + "</br>")
        // document.write("The Value of a-- is :"+" "+ a-- + "</br>")
        // document.write("The Value of a is now" +" "+ a + "</br>"+"</h1>")


        // Question 2
        // var a = 2;
        // var b = 1;
        // var result = --a - --b + ++b + b--;
        // document.write("<h1>"+result+"</h1>");
        // //Now Explaining the result at each of the stage;
        // document.write("<h1>"+"--a is the predecrement so the value of a at this stage will be 1"+"<br/>")
        // document.write("--b is the predecrement so the value of b at this stage will be 0"+"<br/>")
        // document.write("++b is the preincrement so the value of b at this stage will be 1"+"<br/>")
        // document.write("b-- is the preincrement so the value of b at this stage will be  1"+"<br/>")
        // document.write("1+0+1+1 = 3 is Answer"+"</h1>")

        // Question 3 

        // var userName = prompt("Enter Your Name");
        // alert("Hello"+" "+userName+" "+"Welcome to Our Website")

        // QUestion 4 

        // var userInput = prompt("Enter The Number You Like",5);
        // for(var i  = 1;i <= 10;i++){
        //     document.write("<h1>"+userInput+" "+"x"+" "+i+" "+"="+userInput*i+"</h1>")
        // }

        // Question 5

        var userInput1 = prompt("Enter the Name of Subject 1");
        var userInput2 = prompt("Enter the Name of Subject 2");
        var userInput3 = prompt("Enter the Name of Subject 3");
        var a = userInput1;
        var b = userInput2;
        var c = userInput3;
        var totalMarks = 300;
        var obtMarks1 = +prompt("Enter the Obt Marks of Subject 1");
        var obtMarks2 = +prompt("Enter the Obt Marks of Subject 2");
        var obtMarks3 = +prompt("Enter the Obt Marks of Subject 3");
        var x = obtMarks1;
        var y = obtMarks2;
        var z = obtMarks3;
        var totalObtMarks = x+y+z;
        document.write("<h1>"+"SUBJECT"+" "+" "+"TOTAL MARKS"+" "+" "+"OBT MARKS"+" "+"PERCENTAGE"+"<br/>") 
        document.write(userInput1+" "+totalMarks+" "+x+" "+(obtMarks1/totalMarks)*100+"%" +"<br/>")
        document.write(userInput2+" "+totalMarks+" "+y+" "+(obtMarks2/totalMarks)*100+"%" +"<br/>")
        document.write(userInput3+" "+totalMarks+" "+z+" "+(obtMarks3/totalMarks)*100+"%" +"<br/>")
        document.write("Total Marks"+totalMarks+" "+totalObtMarks+" "+"="+(totalObtMarks/totalMarks)*100)
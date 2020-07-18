  // Question 1
        // var a = +prompt("Enter the Integer");
        // document.write(a+"<br/>"+Math.floor(a)+"<br/>"+Math.round(a)+"<br/>"+Math.ceil(a))


        // Question 2 is same as 1 only add "-"in the value


        // Question 3

        // var a = +prompt("Enter the Integer");
        // document.write(Math.abs(a))


        // Question 4 

        // var dice = Math.random();
        // var a = (dice * 4) + 1;
        // var b = Math.floor(a)
        // document.write(b)

        // Question 5 

        // x = (Math.floor(Math.random() * 2) == 0);
        // if (x) {
        //     document.write("heads");
        // } else {
        //     document.write("tails");
        // }

        // Question 6

        // var a = Math.random();
        // document.write("The Random Number Between the 1 and 100 is"+" "+Math.floor(a*100));

        // Question 7

        // var a = prompt("Enter Your Weight Here In Kilograms")
        // document.write("The  Weight Of User is"+" "+a+" "+"Kilograms")


        // Question 8 

        var a = prompt("Enter The Number Between The 1 to 10");
        var b = Math.floor(Math.random() * 11)
        if(a == b){
            alert("Congratulation You are a genius one");
        }
        else{
            alert("Try again")
        }
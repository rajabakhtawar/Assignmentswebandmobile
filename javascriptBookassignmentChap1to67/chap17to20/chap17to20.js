 /** Question 1 
         Multidimensional array

         var multi = [[], [], []]; **/


        /** Question 2 
        var arr = [[0,1, 2,3], [1,0,1,2], [2,1,0,1]];
        document.write("<h1>"+arr[0]+"<br/>"+arr[1]+"<br/>"+arr[2]+"</h1>")
        **/

        /** Question 3

        for (var i = 0; i <= 10; i++) {
            document.write("<h1>"+i +"<br>"+"</h1>");
        }
        **/

        /** Question 4
        var table = prompt("Enter Any Number")
        var times = prompt("Enter How many times you want to print a number")

        for(var i = 1; i <= times; i++){
            document.write("<h1>"+table+"x"+i+"="+i*table+"<br/>"+"</h1>");
        }
        **/

        /** Question 5
        var fruits = ["apple", "banana", "mango", "orange","strawberry"]

        for (var i = 0; i <=4; i++){
            document.write("<h1>"+"Element at index"+" "+fruits.indexOf(fruits[i])+" "+"is"+" "+fruits[i]+"<br/>"+"</h1>");
        } **/

        /** Question 6

        items = ["cake", "applepie", "cookie", "chips", "patties"]
        var userinput = prompt("What item you want ?")

        var userinput2 = userinput.toLowerCase();

        for (var i = 0; i < items.length; i++) {
            if (items[i] === userinput2) {
                document.write(userinput2 + " is available");
            break
            }
            else {
                document.write(" We are sorry"+" "+userinput2+" "+"is not available")
                break
            }
        }
        **/ 

       var arr = [24, 53, 78, 91, 12]
       for(var i = 0; i < arr.length; i++){
           document.write(Math.max(arr[i]) +"<br/>")
       }
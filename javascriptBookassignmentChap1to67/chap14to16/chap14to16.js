        //Question 1
        // var edu = ["1) SSC", " 2) HSC", "3) BCS", "4) BS", "5) BCOM", " 6) MS", "7) M. Phil", "8) Phd"];
        // document.write("<h1>" + "Qualifications:" + "</h1>")
        // document.write("<h1>" + edu[0] + "<br>" + edu[1] + "<br>" + edu[2] + "<br>" + edu[3] + "<br>" + edu[4] + "<br>" + edu[5] + "<br>" + edu[6] + "<br>" + edu[7] + "</h1>")

        //Question 2 
        // var stud = ["Ali","Ahmed","Rafay"]
        // var score = [400,385,325]
        // var totalmarks = 500;
        // var percent1 = (score[0]/totalmarks)*100
        // var percent2 = (score[1]/totalmarks)*100
        // var percent3 = (score[2]/totalmarks)*100
        // document.write("<h1>"+"Score of"+" "+stud[0]+" "+"is"+" "+" "+score[0]+" "+" and percentage is"+" "+percent1)
        // document.write("<h1>"+"Score of"+" "+stud[1]+" "+"is"+" "+" "+score[1]+" "+" and percentage is"+" "+percent2)
        // document.write("<h1>"+"Score of"+" "+stud[2]+" "+"is"+" "+" "+score[2]+" "+" and percentage is"+" "+percent3)

        //Question 3 
        //    var colornames = ["Green","Red","Yellow"]
        // A)
        //    var usercolor = prompt("Enter The Color You Want To Add At The Beginning")
        //    colornames.unshift(usercolor)//unshift is used to add at the beginning
        //  B) 
        // var usercolor2 = prompt("Enter The Color You Want To Add At The End")
        //    colornames.push(usercolor2)//Push is use to add at the end
        //    document.write(colornames)
        //   C)
        //    var usercolor3 = prompt("Enter The  2nd Color You Want To Add At The Beginning")
        //    colornames.unshift(usercolor3)
        //    document.write(colornames)
        //  D)
        // colornames.shift([0])//shift is used to remove item from beginnig of the array.
        // document.write(colornames)
        // F)
        // colornames.pop()//pop is used to remove last item from array
        // document.write(colornames)
        // var usercolor4 = prompt("Enter The 3rd Color You Want To Add In The Array")
        // var usercolor4Index = +prompt("Enter The Index You Want To Add The Color")
        // colornames[usercolor4Index] = usercolor4;
        // document.write(colornames)

        // G)
        // var userdeletecolor = +prompt("At Which Index You Want To Delete The Color")
        // var howManyUserDeletecolor = +prompt("How Many Colors You Want To Delete")
        // colornames.splice(userdeletecolor,howManyUserDeletecolor)//Splice is Used to Add Or Remove Elements In Array
        // document.write(colornames)


        //  Question 4 
        //  var scoreofstud = [320,230,480,120]
        //  document.write("Score Of Students"+" " +scoreofstud)
        //  scoreofstud.sort()
        //  document.write("<br>")
        //  document.write("Ordered Scores Of Students" +" " + scoreofstud)

        // Question 5

        // var cities = ["Karachi","Lahore","Islamabad","Murree","Multan"]
        // var selectedCities = cities.slice(1,3)
        // document.write("List of cities" +" " + cities)
        // document.write("<br>")
        // document.write("List Of Selected Cities" +" " + selectedCities)

        //Question 6 
        // var  arrays = ["This","Is","My","Cat"]
        // var  strings = arrays.join()
        // document.write(strings)

        // Question 7
        // var things = ["Lcd","KeyBoard","Mouse","Printer"]
        // document.write("<h1>"+things+"</h1>")
        // document.write("<br>")
        // document.write("<h1>"+"Out : "+"<br>"+things[0]+"<br>"+"</h1>")
        // document.write("<h1>"+"Out : "+"<br>"+things[1]+"<br>"+"</h1>")
        // document.write("<h1>"+"Out : "+"<br>"+things[2]+"<br>"+"</h1>")
        // document.write("<h1>"+"Out : "+"<br>"+things[3]+"<br>"+"</h1>")

        //Question 8
        
        var things = ["Lcd", "KeyBoard", "Mouse", "Printer"]
        var lists = things.reverse()
        document.write("<h1>" + lists + "</h1>")
        document.write("<br>")
        document.write("<h1>" + "Out : " + "<br>" + lists[0] + "<br>" + "</h1>")
        document.write("<h1>" + "Out : " + "<br>" + lists[1] + "<br>" + "</h1>")
        document.write("<h1>" + "Out : " + "<br>" + lists[2] + "<br>" + "</h1>")
        document.write("<h1>" + "Out : " + "<br>" + lists[3] + "<br>" + "</h1>")
         
         
    


// reverse is used to reverse the entire array
// sort is used to ascending order
// join is used to Join entire Array elements
//splice used to add/remove item in array (index number,elemnts to remove,elements to add)
//slice is used to copy the the one or more elements in Array
// indexOf is used to find index
//multidimensional array var multi = [[], [], []];
//shift method to remove an element from the beginning of an array
//unshift, you can add one or more elements to the beginning of an array
//pop method to remove an element from the end of the array.
//push, you can add one or more elements to the end of an array

/**
* push      = Add an element to end of an array
* pop       = Removes last element of an array
* unshift   = Add an element to start of an array
* shift     = Removes first element of an array
* splice    = Add/Remove array elements at/from any position
* slice     = copy an array
* indexOf   = find index or position of a specific element
 */
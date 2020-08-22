var lists = document.getElementById("list")

firebase.database().ref('todos').on('child_added',function(data){
        var li = document.createElement('li');
        li.setAttribute("class","li")
        var liText = document.createTextNode(data.val().value);
    li.appendChild(liText)
    lists.appendChild(li)
    // Create Delete Button

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class","delbtn");
    delBtn.setAttribute("id",data.val().key)
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText);
    li.appendChild(delBtn);


    // Create Edit button
    var editsBtn = document.createElement("button");
    var editsText = document.createTextNode("Edit");
    editsBtn.setAttribute("class","editBtn");
    editsBtn.setAttribute("id",data.val().key)
    editsBtn.setAttribute("onclick","editItem(this)")
    editsBtn.appendChild(editsText)
    li.appendChild(editsBtn)
    li.appendChild(delBtn);
    console.log(editsBtn);

})

function addToDo(){

    // Create Li
    var todoItem = document.getElementById('todoItems')
    var database = firebase.database().ref('todos')
    var key = database.push().key
    var todo = {
        value: todoItem.value,
        key: key
    }
    database.child(key).set(todo)
    // var li = document.createElement('li');
    // var liText = document.createTextNode(todoItem.value)
    // li.appendChild(liText);
    // lists.appendChild(li)



    // Create Delete Button

    // var delBtn = document.createElement("button");
    // var delText = document.createTextNode("Delete");
    // delBtn.setAttribute("class","delbtn");
    // delBtn.setAttribute("onclick","deleteItem(this)")
    // delBtn.appendChild(delText);
    // li.appendChild(delBtn);


    // Create Edit button
    // var editsBtn = document.createElement("button");
    // var editsText = document.createTextNode("Edit");
    // editsBtn.setAttribute("class","editBtn");
    // editsBtn.setAttribute("onclick","editItem(this)")
    // editsBtn.appendChild(editsText)
    // li.appendChild(editsBtn)
    // li.appendChild(delBtn);
    // console.log(editsBtn);





    todoItem.value = " "
    // console.log(li);
    
}


function deleteItem(e){
    firebase.database().ref('todos').child(e.id).remove()

    e.parentNode.remove();
}

function deleteAll(e){

    firebase.database().ref('todos').remove();
   lists.innerHTML = " ";

}

function editItem(e){
    // firebase.database().ref('todos').child(e.id).remove()
    var val = prompt("Enter New Value",e.parentNode.firstChild.nodeValue);
    var editTodo = {
        value : val,
        key : e.id   
    }
    firebase.database().ref('todos').child(e.id).set(editTodo);
    e.parentNode.firstChild.nodeValue = val;
}
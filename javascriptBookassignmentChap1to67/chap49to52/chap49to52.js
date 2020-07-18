function signUp() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var repeatpassword = document.getElementById('repeatpassword');
    alert(email.value);
    alert(password.value);
    alert(repeatpassword.value)
}


function fullStory() {
    var para = "A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion’s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse desperately requested the lion to set him free. “I promise you, I will be of great help to you someday if you save me.” The lion laughed at the mouse’s confidence and let him go. One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle";
    document.getElementById('para').innerHTML = para;
    var p = document.getElementById('para');
    p.style.fontSize = "large";
}


function editRow(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var index = document.getElementById("index_row" + no);
    var name = document.getElementById("name_row" + no);
    var clas = document.getElementById("class_row" + no);

    var index_data = index.innerHTML;
    var name_data = name.innerHTML;
    var class_data = clas.innerHTML;

    index.innerHTML = "<input type='text' id='index_text" + no + "' value='" + index_data + "'>";
    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    clas.innerHTML = "<input type='text' id='class_text" + no + "' value='" + class_data + "'>";
}

function saveRow(no) {
    var index_val = document.getElementById("index_text" + no).value;
    var name_val = document.getElementById("name_text" + no).value;
    var class_val = document.getElementById("class_text" + no).value;
    document.getElementById("index_row" + no).innerHTML = index_val;
    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("class_row" + no).innerHTML = class_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function deleteRow(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function addRow() {
    var new_index = document.getElementById("newIndex").value;
    var new_name = document.getElementById("newName").value;
    var new_class = document.getElementById("newClass").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='index_row" + table_len + "'>" + new_index + "</td><td id='index_row" + table_len + "'>" + new_name + "</td><td id='class_row" + table_len + "'>" + new_class + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='editRow(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='saveRow(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='deleteRow(" + table_len + ")'></td></tr>";

    new_index.value = "";
    new_name.value = "";
    new_class.value = "";
}
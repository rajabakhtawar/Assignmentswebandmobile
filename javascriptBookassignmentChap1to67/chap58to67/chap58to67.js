var mainContent = document.getElementById('main-content');
console.log(mainContent);


var para = mainContent.getElementsByTagName('p');
console.log(para);


var para = document.getElementsByClassName('render');
for (var i=0; i<para.length; i++){
    console.log(para[i].innerHTML);
}


var firstName = document.getElementById('first-name');
firstName.value = "Raja";
console.log(firstName); 


var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
lastName.value = "Bakhtawar Ahmed";
email.value = "rajaahmedali17@gmail.com";
console.log(lastName);
console.log(email);


var formContent = document.getElementById('form-content');
console.log(formContent.nodeType);


var lastName = document.getElementById('lastName');
console.log(lastName.nodeType)
console.log(lastName.childNodes)


var update = lastName.childNodes.value = "Child";
console.log(update);


console.log(mainContent.firstElementChild);
console.log(mainContent.lastElementChild);


console.log(lastName.nextElementSibling);
console.log(lastName.previousElementSibling);


console.log(email.parentNode);
console.log(email.nodeType)
var form =document.getElementById("myform");
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail");
var submit = document.getElementById("submit");
var htmlId = document.getElementById("htmlId");
form.addEventListener("submit", (e) => {
    e.preventDefault();
   var Name=userName.value;
   var Email=userEmail.value;
var div1 = document.createElement("div");
var h2 = document.createElement("h2");
var h3 = document.createElement("h3");
h2.innerText=Name;
h3.innerText=Email;
div1.appendChild(h2);
div1.appendChild(h3);
htmlId.appendChild(div1);
})

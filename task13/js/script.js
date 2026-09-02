var users = [{ name: "shrouk", email: "shrouk@email.com" },
{ name: "aya", email: "aya@email.com" },
{ name: "sara", email: "sara@email.com" },
{ name: "saly", email: "saly@email.com" }];


localStorage.setItem("users", JSON.stringify(users));
var getdata = JSON.parse(localStorage.getItem("users"));
var objectdiv = document.getElementById("objectdiv");
getdata.forEach(element => {
    var div = document.createElement("div");
    var name = document.createElement("p");
    var email = document.createElement("p");
    email.innerText = element.email;
    name.innerText = element.name;
     div.appendChild(name);
    div.appendChild(email);
    objectdiv.appendChild(div);
    div.style.backgroundColor ="gray";
});
console.log(objectdiv);

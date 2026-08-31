var courses=["js","html","css"];
var p=prompt("enter course");
var course=courses.find(item => item === p);
    if(course){
        console.log("founded");
    }
    else{
        alert("not founded");
        courses.push(p);
        console.log(courses);
    }




//   task2  
var user = [];
function addUser() {
    var newUser = {
        id: Number(prompt("Enter user id")),
        name: prompt("Enter User Name"),
        balance: Number(prompt("Enter user balance"))
    };
    user.push(newUser);
}
function editUserBalance() {
    var searchId = Number(prompt("Enter id to edit balance"));
    var foundedUser = user.find(u => u.id === searchId);
    var newBalance = Number(
        prompt(
            'The old balance for ' +
            foundedUser.name +
            ' is ' +
            foundedUser.balance +
            '. Enter new balance:'
        )
    );
    foundedUser.balance = newBalance;
    console.table(user);
}
function transferMoney() {
    var firstId = Number(prompt("Enter sender id"));
    var secondId = Number(prompt("Enter resevier id"));
    var sender = user.find(u => u.id === firstId);
    var receiver = user.find(u => u.id === secondId);
    var amount = Number(prompt("Enter amount to transfer"));
    sender.balance = sender.balance - amount;
    receiver.balance = receiver.balance + amount;
    console.table(user);
}
function deleteUser() {
    var deleteId = Number(
        prompt("Enter user id you want to delete"));
    user = user.filter(u => u.id !== deleteId);
    console.table(user);
}
addUser();
addUser();
addUser();
console.table(user);
editUserBalance();
transferMoney();
deleteUser();


var degree = prompt("enter your degree")
if (degree==""||degree==null){
    alert("please enter your degree")
}
else if (degree>100){
    console.log("invalid degree")
}
else if (degree>90){
    console.log("exellent")
}
else if (degree>80){
    console.log("very good")
}
else if (degree>70){
    console.log("good")
}
else{
    console.log("fail")
}
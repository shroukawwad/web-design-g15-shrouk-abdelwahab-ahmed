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




    
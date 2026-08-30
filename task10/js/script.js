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

// task-2
function looping(startNum,endNum, breakNum,contNum){
 if (startNum==undefined|| endNum == undefined || breakNum==undefined || contNum == undefined){
    alert("please enter all data"); return;
  }
  else{

      for (var i=startNum; i<=endNum; i++){
        if(i==breakNum){
            break;
        }
        if(i==contNum){
            continue;
        }
        console.log(i);
      }
  }
 }
 looping(1, 10,3,4)

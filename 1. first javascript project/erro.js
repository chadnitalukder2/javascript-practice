// alert("hi everyone");
// alert(x);
// alert("bye everyone");

/*try{
    alert("hi everyone");
    alert(x);
}
catch(err){
    alert("Inside catch block");
}
finally{
    alert("bye everyone");
}*/


document.querySelector("#checkbutton").addEventListener("click", function(){
  var num = document.querySelector("#numtext").value;
 
  try{
    if(num < 5 ){
        throw "input is too law "
    }
    else if(num > 10){
        throw "input is too high "
    }

  }catch(err){
    console.log(err);

  }
});

/*var photos = ["img/tea.jpg","img/girl.jpg","img/groceray.jpg"  ]

var imgTag = document.querySelector("img");

var count = 0;
function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}
function prev(){
    count--;
    if(count < 0 ){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}*/

//Changing CSS style dynamically
var myVar =  document.querySelector("#pera");
function addStyle(){
  myVar.classList.add("pera-style");
//   myVar.style.fontSize = "3rem";
//   myVar.style.fontWeight = "bold";
//   myVar.style.fontStyle = "italic";
}
function removeStyle(){
  myVar.classList.remove("pera-style");
}












































































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
/*var myVar =  document.querySelector("#pera");
function addStyle(){
  myVar.classList.add("pera-style");
//   myVar.style.fontSize = "3rem";
//   myVar.style.fontWeight = "bold";
//   myVar.style.fontStyle = "italic";
}
function removeStyle(){
  myVar.classList.remove("pera-style");
}*/

//Event Listener
/*document.querySelector("button").addEventListener("click", myFunction);
function myFunction(){
    alert("hello");
}*/

//anonimas function nam sara function
/*document.querySelector("button").addEventListener("click", function(){
    alert("hello")
});*/

/*var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
myVar.classList.add("heading-style");
});
myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("heading-style");
    });*/

//Event Listeners with multiple elements
/*document.querySelectorAll(".myButton")[0].addEventListener("click", function (){
 var text = this.innerHTML;
    document.querySelector("h1").innerHTML = text +" is clicked"

 });
 document.querySelectorAll(".myButton")[1].addEventListener("click", function (){
    var text = this.innerHTML;
       document.querySelector("h1").innerHTML = text +" is clicked"
   
    });
    document.querySelectorAll(".myButton")[2].addEventListener("click", function (){
        var text = this.innerHTML;
           document.querySelector("h1").innerHTML = text +" is clicked"
       
        });*/

//var len = document.querySelectorAll(".myButton").length;
/*for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".myButton")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      document.querySelector("h1").innerHTML = text + " is clicked";
    });
}*/

// how to play audio in javascript
for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".myButton")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;
      console.log(text);
      audioPlay(text);
      playAnimation(text)
    });
}
function audioPlay(text) {
  switch (text) {
    case "A":
      var audio = new Audio("sounds/1st.mp3");
      audio.play();
      break;
    case "B":
      var audio = new Audio("sounds/2nd.mp3");
      audio.play();
      break;
    case "C":
      var audio = new Audio("sounds/3rd.mp3");
      audio.play();
      break;
  }
}

//animation add
function playAnimation(text){
 var selectedButton =  document.querySelector("." + text);
 selectedButton.classList.add("anim");

 setTimeout(function(){
    selectedButton.classList.remove("anim");
 },1000);
}
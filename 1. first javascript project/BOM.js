console.clear();
//console.log(window);
//console.log(location);

/*//href
console.log(location.href);
//protocol
console.log(location.protocol);
//hostname
console.log(location.hostname);
//port
console.log(location.port);
//pathname
console.log(location.pathname);*/

var locationDiv = document.querySelector(".location-div");
console.log(locationDiv);

var p1 = locationDiv.children[0];
p1.textContent = location.href;

var p2 = locationDiv.children[1];
p2.textContent = location.protocol;

const visitButton = document.getElementById("visit-button");
visitButton.addEventListener("click", function(){
location.assign("https://www.studywithanis.com")
});









/*var name1, name2, name3, name4, name5;
name1 = "asha";
name2 = "prem";
name3 = "chad";
name4 = "chadni";
name5 = "puja";*/
//console.log(name3);

//array
/*var =  names = new Array(5);
names[0] = "asha";
names[1] = "prem";
names[2] = "chad";
names[3] =  "chadni";
names[4] = "puja";*/
/*var names = ["asha", "puja","prem","chad", "chadni"]
//names.push("shokina");//new value add hobe
names.pop(); //ses er value remove hobe
//console.log(names[2] );
//console.log(names[3] );
console.log(names);
console.log(names.length);*/

/*var country1 = ["Bangladesh", "india"];
var country2 = ["Pakistan", "Nepal"];

var country = country1.concat(country2); ///concat jukto kore
console.log(country);*/

//---------------array loop-------------------------------
//var num = [10, 20, 30, 40, 50];
/*var num = new Array();
for(var i =0 ; i<5; i++){
    num[i]= parseInt(prompt("enter a number : "))
}
var sum = 0;

for(var i = 0; i<5; i++){
    console.log(num[i]);
    sum = sum + num[i];
}
console.log ("sum =" +sum);*/

//shipt 1st dike teke remove kore opposite of pop
/*var names = ["puja", "nitesh", "Prem"];
console.log(names);
names.shift();
console.log(names);*/

//unshipt 1st dike element add kore opposite of push
/*var names = ["puja", "nitesh", "Prem"];
console.log(names);
names.unshift("chad");
console.log(names);*/

//splice-add-----------
/*var names = ["puja", "nitesh", "Prem"];
console.log(names);
names.splice(2,1, "asha", "anis"); //splice (2,0) 2 1st dara bujay koto numbere element jukto korte chaw 02nd dara remove kora
console.log(names)*/

//splice-remove-----------
/*var names = ["puja", "nitesh", "Prem"];
console.log(names);
names.splice(1,2);
console.log(names);*/

//slices-------------------------------
/*var names = ["puja", "nitesh", "Prem"];
console.log(names);
var newArray = names.slice(1);
console.log(newArray)*/

//sort- alpabet----------------------------------
/*var names = ["asha", "nitesh", "chadni"];
console.log(names);
var sortedNames = names.sort();
//names.reverse();
console.log(sortedNames);*/

//sort ---number ------------------
/*var numbers = [20 , 45, 4, 70, 80];
numbers.sort(function(a,b){
   // return a-b
    return b-a
});
console.log(numbers);*/

// ---------------1D array-------------
/* console.clear();
function highestScore(scores) {
 let max = scores[0];
 for(var x = 1; x<scores.length; x++){

    if(max < scores[x]){
        max = scores[x];
    }
 }
return max;
}
let scores = [21, 28, 1, 88, 15];
 var maxScore = highestScore(scores);
console.log(maxScore)*/

//------------2D array----------------------------
 /* function highestRunScore(playersInfo){
    
    var highestScore = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for( var x = 1; x < playersInfo.length; x++){
        if(highestScore < playersInfo[x] [1]){
            highestScore = playersInfo[x] [1];
            highestScore = playersInfo[x] [0];
        }
    }
    return highestScore;
  }
  var playersInfo = [
    ["Ashraful", 95],
    ["Mizan", 25],
    ["Rakib", 45],
    ["lu", 105],
  ];
var name = highestRunScore(playersInfo);
console.log(name);*/




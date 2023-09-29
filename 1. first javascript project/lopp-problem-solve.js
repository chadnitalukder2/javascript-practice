/*sum = 0;
let result = [
  {
    exam: "1st semester",
    marks: [40, 50, 60, 70, 80],

  },
  {
    exam: "2nd semester",
    marks: [90, 50, 60, 70, 80],
  },
  {
    exam: "3rd semester",
    marks: [100, 50, 60, 70, 80],
  },
  {
    exam: "4th semester",
    marks: [100, 50, 60, 70, 80],
  },
];

Find out the total number
function totalMarks(result) {
  for (var i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].marks.length; j++) {
      sum = sum + result[i].marks[j];
    }
  }
}
totalMarks(result);
console.log(sum);*/

/*let arr = [1, 3, 5, 7, 9, [2, 4, 6, 8]];
var sum1 = 0;
var sum2 = 0;
var sum = 0;
function sumMarks(total) {
  for (var i = 0; i < total.length - 1; i++) {
    sum1 = sum1 + arr[i];
  }
  for (var j = 0; j < total[total.length - 1].length; j++) {
    sum2 = sum2 + total[total.length - 1][j];
  }
  sum = sum1 + sum2;
}
sumMarks(arr);
console.log(sum1);
console.log(sum2);
console.log(sum);*/

//console.log(arr[arr.length - 1], arr.length - 1);
/*var sum = 0;
let array = [
  [1, 2, 3, 4, 5],
  [3, 4, 5, 6, 7],
  [13, 3, 4, 5],
];

for (var i = 0; i < array.length; i++) {
  // console.log(array[i]);

  for (var j = 0; j < array[i].length; j++) {
    //  console.log(array[i][j]);
    sum = sum + array[i][j];
  }
}
console.log(sum);*/

/*var sum = 0;
let array = [
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ],
];
for (var i = 0; i < array.length; i++) {
  //console.log(array[i]);
  for (var j = 0; j < array[i].length; j++) {
    //console.log(array[i][j]);

    for (var k = 0; k < array[i][j].length; k++) {
      //console.log(array[i][j][k]);
      sum = sum + array[i][j][k];
    }
  }
}
console.log(sum);
*/

/*var array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5, 4, 3, 9, 9];

function singleArray(inputArray) {
  var newArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (newArray.includes(inputArray[i])==false) {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
}

var result = singleArray(array);
console.log(result);*/


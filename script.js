var arr = [6, 7, 8, 8, 8];

//-------------C1---------------

// function average() {
//     var total = 0;
//     var average = 0;
//     var arrlength = arr.length;
//     for (var i = 0; i < arrlength; i++){
//         total = total + arr[i];
//     }
//     average = total / (arrlength);
//     return average;
// }

// average(arr);


//---------------C2----------------------

var sum = arr.reduce(function(acc, curr){
    return acc + curr;
}, 0);

var arrLength = arr.length;
var average = 0;
average = sum / arrLength;

// --------------------------------------------

console.log(average);

if(average >=0 && average <= 7){
    console.log('D grade')
}else if(average > 7 && average <=8 ){
    console.log("C grade")
}
else if(average > 8 && average <= 9 ){
    console.log("B grade")
}
else if(average > 9 && average <= 10 ){
    console.log("A grade")
}

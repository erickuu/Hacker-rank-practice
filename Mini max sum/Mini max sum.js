//THIS SOLUTION HAVE A ERROR AND I DONT KNOW THERE...

// output expected : 10 14

// // output expected : 299 9271


// function miniMaxSum(arr) {
//     // Write your code here
//    let stack1 = 0 ;
//    let stack2 = 0 ;
//    for (let i = 0; i < arr.length - 1 ; i++ ) {
//        stack1 += arr[i];
   
//    }
//    for (let a = arr.length -1 ; a > 0 ; a--) {
//        stack2 += arr[a];
//    }
//    console.log(stack1,stack2);
// }


// miniMaxSum(arr);


// THIS SOLUTIONS IS MOST EFFECTIVE ...


function min(arrTest) {
    var v = arrTest.splice(' ');
    for (var i = 0; i < v.length; i++) {
        v[i] = parseInt(v[i])
    }
    var max = -Infinity;
    var min = Infinity;
    for (var i = 0; i < v.length; i++) {
        var sum = 0;
        for (var j = 0; j < v.length; j++) {
            if ( i != j ) {
                sum += v[j];
            }
        }
        if (sum < min) min = sum;
        if (sum > max) max = sum;
    }
    console.log(min, max);
} 

const arrTest = [1,2,3,4,5];
const arr = [7,69,2,221,8974];

min(arrTest);
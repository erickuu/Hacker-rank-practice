// n = 4 
//    # <- 1
//   ## <- 2
//  ### <- 3
// #### <- n = 4
 
// function staircase(n) {
//     // Write your code here
//     var char = '';
//     for (var i = 0; i < n; i++) {
//         char += '#';
//         console.log(char);

//     }
// }


function staircase(n) {
    // Write your code here
    var char = '';
    var blank = '';
    for (var i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i)+"#".repeat(i));
    }
}

staircase(4);
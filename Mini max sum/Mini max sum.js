const arr = [1,2,3,4,5];

function miniMaxSum(arr) {
    // Write your code here
   let stack1 = 0 ;
   let stack2 = 0 ;
   for (let i = 0; i < arr.length - 1 ; i++ ) {
       stack1 += arr[i];
   
   }
    for (let a = arr.length -1 ; a > 0 ; a--) {
       stack2 += arr[a];
   }
   return {stack1, stack2};
}
console.log(miniMaxSum(arr));

// output expected : 10 14
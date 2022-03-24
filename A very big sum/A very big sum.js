function aVeryBigSum(ar) {
    // Write your code here
    let stack = 0 ; 
    let i = stack;
    while(i < ar.length){
        stack += ar[i];
        i++;
  
    return stack;
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
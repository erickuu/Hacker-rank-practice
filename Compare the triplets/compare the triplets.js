/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
    // Write your code here
    let scoreAlice = 0;
    let scoreBob = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]){
            scoreAlice += 1;
        }
        if(a[i] == b[i]){
        }
        if(a[i] < b[i]){
            scoreBob += 1;
        }
    }
    return [scoreAlice,scoreBob];
}

console.log(compareTriplets([17,28,30],[99,16,8]));
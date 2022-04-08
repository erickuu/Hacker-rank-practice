
/*
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

// const s = 7; // starting point loc sams'house
// const t = 11 // ending point loc sams'house
// const a = 5; // loc apple tree
// const b = 15; // loc orange tree
// const applesArr = [-2,2,1];
// const orangeArr = [5,-6];

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     // Variables to stored iteration sum ...
//         let sumApple = []; 
//         let sumOrange = []; 
//         let result1 = 0; 
//         let result2 = 0; 
//     // Method foreach to iter each elements ...
//     apples.forEach((item) => {
//         sumApple.push(item+a);
//     });
//     oranges.forEach((item) => {
//         sumOrange.push(item+a);
//     });  
//     sumApple.forEach((item)=>{
//         if(item >= s && item <= t){
//             result1++;
//         }
//     });
//     sumOrange.forEach((item)=>{
//         if(item >= s && item <= t){
//             result2++;
//         }
//     });
//     console.log(result1);
//     console.log(result2);
// }


// countApplesAndOranges(s,t,a,b,applesArr,orangeArr);


const s = 7;  // starting point loc sams'house
const t = 11 // ending point loc sams'house
const a = 5;    // loc apple tree
const b = 15;  // loc orange tree
const apples = [-2,2,1];
const oranges = [5,-6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Variables to stored iteration sum ...
    let result1 = 0; 
    let result2 = 0; 
    // Method foreach to iter each elements ...
    apples.forEach((num)=>{
        let numIs = num + a;
        if(numIs >= s && numIs <= t){
            result1 +=1;
        }
    })
    oranges.forEach((num)=>{
        let numIs = num + b;
        if(numIs >= s && numIs <= t){
            result2 +=1;
        }
    })
    console.log(result1);
    console.log(result2);
}


countApplesAndOranges(s,t,a,b,apples,oranges);

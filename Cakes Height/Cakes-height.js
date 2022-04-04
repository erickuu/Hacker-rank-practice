const candlesTes = [3,2,1,3]; // Output 2
const candles = [4,4,1,3]; // output 2 

function birthdayCakeCandles(candles) {
    // Write your code here
    let stack = [];
    let maxHeight = Math.max(...candles);
    for (var i = 0 ; i < candles.length; i++) {
        if(maxHeight == candles[i]){
            stack.push(candles[i]);
        }
    }

    console.log(stack.length);
}

birthdayCakeCandles(candles);

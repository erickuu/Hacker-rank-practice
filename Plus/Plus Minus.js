const minus = (num) => {
    var pos = 0.0;
    var neg = 0.0; 
    var zero = 0.0; 
    var len = num.length;

    num.map((num)=>{
        if(num > 0 ){ pos++}
            if(num < 0 ){ neg++}
                if(num == 0 ){zero++}
        return false;
        
    });

    console.log((pos/len).toPrecision(6));
    console.log((neg/len).toPrecision(6));
    console.log((zero/len).toPrecision(6));
}
minus([-4, 3, -9, 0, 4, 1]);

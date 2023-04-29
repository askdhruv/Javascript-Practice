function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var ser = [];
    var sum =0;
    ser.push(0);
    if(n>1){
        ser.push(1);
    }
    for(var i = 1; i<n-1; i++){
                
        sum = ser[i-1] + ser[i]
        ser.push(sum);
    }
    
    return ser;
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
}

/******Another way******/

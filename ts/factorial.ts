function factorial(result:number, num:number):number{
    var temp:number = result;
    temp *= num;
    console.log(temp);
    num--;
    if(num!=1){
        factorial(temp, num);
    } else{
        result = temp;
        console.log("temp: "+temp);
        console.log("result: "+result);
        return result;
    }
    
}

console.log(factorial(1,10));
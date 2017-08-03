
var num:number = 6;
var temp:number=num;
var fact:number = 1;
factorial(fact,temp);

function factorial(fact,temp){
    fact *=temp;
    temp--;
    if(temp>1)
        factorial(fact,temp);
    else
        console.log(fact);
}
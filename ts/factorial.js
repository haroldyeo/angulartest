var num = 6;
var temp = num;
var fact = 1;
factorial(fact, temp);
function factorial(fact, temp) {
    fact *= temp;
    temp--;
    if (temp > 1)
        factorial(fact, temp);
    else
        console.log(fact);
}

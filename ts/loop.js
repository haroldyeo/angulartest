// program to count the number of odds numbers between 0 and 20
var count = 0;
var num = 0;
do {
    if (num % 2 != 0) {
        count++;
    }
    num++;
} while (num <= 20);
console.log("the number of odd numbers between 0 and 20 is " + count);


/** class  */
class Greeting {
    greet(): void {
        console.log("Hello World")
    }
}
var obj = new Greeting();
obj.greet();


/** type asserting */
var test = "3"
var num: number = <number><any>test;




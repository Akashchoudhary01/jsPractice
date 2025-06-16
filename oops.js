/**
 * 
 * function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log('greet');
        
    }
// 

    // return this
}

    const userOne = new User("Akash" , 12 , true);
    const userTwo =  new User("Rishu" , 13 , false);
console.log(userOne);
 */


//////
//prototype
//////
/**
 * 
 function multiplyBy5(num){
    return num*5;
 }

 multiplyBy5.power = 2;

 console.log((multiplyBy5(5)));
 console.log(multiplyBy5.power);
 console.log(multiplyBy5.prototype);
 */

 //
 let anotherUserNAme = "Akash     "

 String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length is : ${this.trim().length}`);
    
 }

 anotherUserNAme.trueLength();
 
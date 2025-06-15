function User(username , loginCount , isLoggedIn){
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



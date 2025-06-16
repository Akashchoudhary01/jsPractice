class User{
    constructor(username){
        this.username = username;
    }
        static createID(){
            return '1234';
        // console.log("1234");
        
    }
    logme(){
        // console.log(`${this.username} is loggedIn`);
        return `${this.username} is loggedIn`
        
    }

}

const user = new User("Akash");
console.log(user.logme());
console.log(User.createID());

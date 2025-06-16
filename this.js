function newUserName(username) {
    this.username = username;
    console.log("Called");
    
    
}
function createUser(username , email , password){
    newUserName.call(this , username)
    this.email = email;
    this.password = password;

}

const user1 = new createUser("Akash" , "akash@gmaiul.com" , 12345);
// console.table(user1);

//  // //  //
class User{
    constructor(userName , email , password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.userName.toUpperCase()}`
    }

}

const newUser = new User("Akash" , "akash@gmail.com" , "Akash@1234");
console.log(newUser);

console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());

///////

function userr(userName , email , password){
        this.userName = userName;
        this.email = email;
        this.password = password;
}

userr.prototype.incryptPassword = function(){
    return `${this.password}abc`;
}
userr.prototype.changeText = function(){
   return `${this.userName.toUpperCase()}`
}

const tea = new userr("chai" ,  "chai@gmail.com" , " 123");
console.log(tea.incryptPassword());
console.log(tea.changeText());






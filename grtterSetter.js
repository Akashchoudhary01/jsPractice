// in class
/*class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email}`.toUpperCase();
    }

    set email(value){
        this._email = value
    }
    get  password(){
        return  `${this._password}kash`.toUpperCase() ;
    }
    set password(value){
        this._password = value;
    }
}
const user1 = new User("Akash@gmail.com" , "Akash123");
console.log(user1.password);
console.log(user1.email);
*/

//in function

/**
 * const User = function(userName , email){
    this._userName = userName;
    this._email = email;

    Object.defineProperty(this , 'email' , {
        get: function(){
            return this._email.toUpperCase();
        } , 
        set : function (value){
            return this._email = value;
        }
    })

    Object.defineProperty(this , 'userName' , {
        get: function(){
            return `${this._userName}`.toUpperCase()
        } , 
        set : function (value){
            return this._userName = value;
        }
    })
}

const pr1 = new User('Akashh' , "12345");
console.log(pr1.userName);
console.log(pr1.email);
 */

// in object

const User = {
    _email : 'akash@gamil.com',
    _password : "Akash@12",

    get email(){
        return this._email.toUpperCase()

    },
    set email(value){
        return this._email = value

    },
    get password(){
        return this._password.toUpperCase()

    },
    set password(value){
        return this._password = value

    }
}
const neeee = Object.create(User);
console.log(neeee.email);
console.log(neeee.password);

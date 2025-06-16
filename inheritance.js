/**
 * Inheritance in JavaScript allows a class (child) to inherit properties and methods from another class (parent), promoting code reusability. JavaScript primarily uses prototype-based inheritance, where objects inherit from other objects (prototypes) rather than classes
 */

class User{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(`${this.userName} is LoggedIn`);
        
    }
}

class teacher extends User{
    constructor (userName , email , password){
        super(userName);
        this.email = email;
        this.password = password;

    }

    addCourse(){
        console.log(`New Course was added by ${this.userName}`);
        
    }
}

const person = new teacher('Akash' , "akash@gmail.com" , "123");
const person1 = new User('Akash');
person1.logMe();
person.addCourse();


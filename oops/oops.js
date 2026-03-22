// function createCar(name , model , year , color , speed ){
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.speed = speed;
//     this.slogan = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.appendChild(h1);
//     }
// }

// let car1 = new createCar("Fortuner" , "legender 4 X 4" , 2026 , "red" , "180");
// let text = car1.slogan("The fortuner is headturner");

// console.log(car1);


// class
/**
 * class CreatePencil{
    constructor(name , price  , company , color){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
     
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((elem)=>{
            if(elem.style.color === this.color){
                elem.remove();
            }
        })
    }
}

let p1 = new CreatePencil("Natraj" , 10  , "natraj" , "blue");
let p2 = new CreatePencil("Apsara" , 15  , "Apsara" , "black");
 */

///
// extends & super keyword

class User{
    constructor(name , city , age , email){
        this.name = name;
        this.city = city;
        this.age = age;
        this.email = email;
        this.role = "user"
    }

    checkRole(){
        return `you are ${this.role}`
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
        constructor(name , city , age , email){
            super (name , city , age , email)
            this.role = "ADMIN";
        }

        remove(){
            document.querySelectorAll("h1").forEach(function(elem){
                elem.remove();

            })
        }
}

let u1 = new User("Akash" , "Ranchi" , 22 , "akashkrchoudhary007@gmail.com");
let u2 = new User("Juhi" , "Ranchi" , 19 , "juhipanday@gmail.com");
let Ai = new Admin("luck" , "earth" , 69 , "s@s.s");
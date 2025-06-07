// // // // let isLoggedin = 0;
// // // // let booleanIsLoggedin = Boolean(isLoggedin)
// // // // console.log(booleanIsLoggedin);

// // // // //  number to String  conversion
// // // // let number = 69;
// // // // let stringConversion = String(number);
// // // // console.log(stringConversion);
// // // // console.log(typeof stringConversion );

// // // // //
// // // // let num1 , num2 , num3;

// // // // (num1 = (num2 = (num3 = 1))), 2, 3;

// // // // console.log(num1);
// // // // console.log(num2);
// // // // console.log(num3);

// // // // Strine

// // // // const gameName = "Pokemon";
// // // // console.log(gameName);
// // // // console.log(gameName.length);
// // // // console.log(typeof(gameName));
// // // // console.log(typeof(gameName));
// // // // console.log(gameName.charAt(2));
// // // // console.log(gameName.indexOf('n'));

// // // // const newString = gameName.substring(4 , 1);
// // // // console.log(newString);

// // // // const newString1 = gameName.slice(1 , -3);
// // // // console.log(newString1);

// // // //  P O K E M O N
// // // //  0 1 2 3 4 5 6

// // // const iphone = "         Apple was a american brand";

// // // console.log(iphone);
// // // console.log(iphone.trim());

// // // console.log(iphone.includes("brand"));
// // // console.log(iphone.trim().split( ));
// // // console.log(iphone.replace("american" , "indian"));

// // // Numbersss

// // const newNum = new Number(102210.7874);
// // console.log(newNum);

// // console.log(newNum.toString());
// // console.log(typeof(newNum));

// // // console.log(newNum.toFixed(2));

// // console.log(newNum.toPrecision(1));
// // console.log(newNum.toLocaleString());
// // console.log(newNum.toLocaleString('en-IN'));

// // // Mathss

// // const min = 50;
// // const max = 70;

// // console.log(Math.floor(Math.random()* (max-min +1 ))+min);

// // // Date
// // let myDate = new Date()
// // console.log(myDate);
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleDateString());

// // let myCreatedDate = new Date(2023 , 0 , 23);
// // console.log(myCreatedDate.toLocaleDateString());

// // Array in java

// // const myArr = [1 ,2 , 3,4 , 5 ,6]
// // console.log(myArr[1]);

// // // Advance Array

// // const Marvel_Heros = ["Akash" , "Virat" , "Rohit"]
// // const Dc_Heros = ["Ajay" , "Akashy" , "Karan"]

// // Push Method
// // Marvel_Heros.push(Dc_Heros);
// // console.log(Marvel_Heros.length);

// // Concate method
// // const newHeros = Marvel_Heros.concat(Dc_Heros);
// // console.log(newHeros);

// // Using Sprade OPerator
// // const newDate = [...Dc_Heros , ...Marvel_Heros]
// // console.log(newDate);

// // Flat Function

// // const newArr = [1 , 2 ,3  ,4 ,5 ,  [6 ,7 ,4 ,3, 2] ,8 ,9 , [2 , 4, 5,[5 ,6 ]],2 ]
// // const AnotherArr = newArr.flat(Infinity);
// // console.log(AnotherArr);

// // console.log(Array.isArray("Akash"));
// // console.log(Array.from("Akash"));

// // console.log(Array.from({name : "Akash"}));

// let Score1 = 69;
// let Score2 = 89;
// let Score3 = 79;

// console.log(Array.of(Score1 , Score2 , Score3));  //A set of elements to include in the new array object.

// Object

// const Mysymbol = Symbol('haha1');
// const newObj={
//     name : "Akash",
//     [Mysymbol] : "My key1",
//     age : 12,
//     email : "akashkrchoudhary007@gmail.com",
//     Address : "Dhurwa more bundu , Ranchi",
//     isLoggedIn: false,
//     LastLogin : ["Monday" , "Friday", "Saturday"],
//     "Full Name" : " Akash Kumar Choudhary"

// }
// console.log(newObj["email"]);
// console.log(newObj.email);
// console.log(newObj["Full Name"]);
// console.log(typeof(newObj[Mysymbol]));
// newObj.email = "akashtheBoss@gmail.com"
// Object.freeze(newObj);

// console.log(newObj);
// newObj.email = "hahahaha@gmail.com"

//
// Function
//

// newObj.greeeting = function (){
//     console.log("Hello user !");
// }

// newObj.greeeting1 = function (){
//     console.log(`hello User , ${this["Full Name"]}`);
// }
// console.log(newObj.greeeting());
// console.log(newObj.greeeting1());

//

// const regularUser = {
//   name: "Akash",
//   age: 12,
//   email: "akashkrchoudhary007@gmail.com",
//   Address: "Dhurwa more bundu , Ranchi",
//   isLoggedIn: false,
//   fullName:{
//     userFullName:{
//         firstname: "Akash",
//         middelName: "Kumar",
//         lastName: "Choudhary"
//     }

//   }
// };

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);

// const obj1 = { 1:"one" , 2:"two"}
// const obj2 = { 3:"three" , 4:"four"}

// const obj4 = Object.assign(obj1 , obj2)

// const obj3 = {...obj1 , ...obj2}
// console.log(obj3);
// console.log(obj4);

// const regularUser = {
//   name: "Akash",
//   age: 12,
//   email: "akashkrchoudhary007@gmail.com",
//   Address: "Dhurwa more bundu , Ranchi",
//   isLoggedIn: false,
// };

// // console.log(Object.keys(regularUser));
// // console.log(Object.values(regularUser));
// // console.log(Object.entries(regularUser));

// // console.log(regularUser.hasOwnProperty("Email"));

// // Object destructure
// const {name :n} = regularUser;
// console.log(n);


// 
// function Loginusername(username="Rishu"){
//   if(!username){
//     console.log("Please Enter a Username");
//     return  
//   }
//   return `${username} , have a good day ! `
  
// }

// console.log(Loginusername("Rishabh"));

function cartItems(val1 , val2,...nums){
  return nums;
}
console.log(cartItems(23 , 34 , 56 , "Akash" , 89));



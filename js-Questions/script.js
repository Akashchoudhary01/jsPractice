// // //use Rest parameter to accept any num of score and return total score

// // function getScore(...score){
// //     let total = 0;
// //     score.forEach(function(val){
// //      total =total+ val;
// //     })
// //     return total
    
// // }

// // console.log(getScore(22 , 33 , 44 , 55 , 22 , 44));

// // //pass a function inside another function and execute it inside

// // function abcd(val){
// //     val()
    
// // }
// // let ab =  abcd(function(){
// //     console.log("Hello World");
    
// // });

// // console.log(ab);

// // //what is closure ? when it is created

// // function outer(){
// //     let count = 0;
// //   return  function inner (){
// //         count++;
// //         console.log(count);
        
// //     }
    
// // }
// // const counter = outer();

// // counter();


// // //write a bmi calculator

// // function BMI(weight ,  height){
// //     return weight / (height * height);
// // }
// // console.log(BMI(65 , 1.7).toFixed(2));

// // //write a discount calculator using HOF
// //foreach
// let arr = [2 , 3 , 4 , 5 , 2 , 4]

// let ans = arr.forEach(function(val){
//     return  console.log(val+2);
    
// })
// console.log(ans);

// //filter : filter() is an array method used to create a new array containing only the method that pass the condition
// let arrr = [2 , 3 , 4 , 5 , 32 , 41]
// let anss = arrr.filter(function(val){
//     return val > 5;
// })
// console.log(anss);


// //

//object for in 
let obj = {
    name : " Akash ",
    age : 22,
    email : "test@test.com"
}

for(let key in obj){
    console.log(key , obj[key]);
    
}

//object.keys  = it create a new arrays with all the key of the object 
let keys = Object.keys(obj);
console.log(keys);


//object.keys  = it create a new arrays with all the value of the object 
let values = Object.values(obj);
console.log(values);

//object.keys  = it create a new individual arrays for all the element of the object 
let entries = Object.entries(obj);
console.log(entries);

//spread : it create a referance copy of the object 

let obj1 = {
    name : " Demo",
    email : "demo@demo.com",
    age : 1
}

let obj2 = {...obj1}
console.log(obj2);

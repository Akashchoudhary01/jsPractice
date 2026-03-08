// //use Rest parameter to accept any num of score and return total score

// function getScore(...score){
//     let total = 0;
//     score.forEach(function(val){
//      total =total+ val;
//     })
//     return total
    
// }

// console.log(getScore(22 , 33 , 44 , 55 , 22 , 44));

// //pass a function inside another function and execute it inside

// function abcd(val){
//     val()
    
// }
// let ab =  abcd(function(){
//     console.log("Hello World");
    
// });

// console.log(ab);

// //what is closure ? when it is created

// function outer(){
//     let count = 0;
//   return  function inner (){
//         count++;
//         console.log(count);
        
//     }
    
// }
// const counter = outer();

// counter();


// //write a bmi calculator

// function BMI(weight ,  height){
//     return weight / (height * height);
// }
// console.log(BMI(65 , 1.7).toFixed(2));

// //write a discount calculator using HOF
//foreach
let arr = [2 , 3 , 4 , 5 , 2 , 4]

let ans = arr.forEach(function(val){
   return  console.log(val+2);
    
})
console.log(ans);


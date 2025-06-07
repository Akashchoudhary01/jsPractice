// for (let i = 0; i <=10; i++) {
//     console.log(``);
//     console.log(`Table of ${i} `);
//     for (let j = 0; j <=10; j++) {
//         console.log(`${i} * ${j} = ${i*j}  ` );
        
      
        
//     }
    
// }

// While loop

// let Score1 = [21 , 332 ,443 , 54 , 23 , 64]
// let i = 1;
// while (i < Score1.length) {
//     console.log(Score1[i]);
//     i++;
// }


// const hero = ["Spiderman" , "hulk" , "superman"]
// let ii = 0;
// while ( ii< hero.length ){
//     console.log(hero[ii]);
//     ii = ii+1;
    

// }

// //do - while loop 
// let score = 1;
// do{
//     console.log(score);
//     score++;
    
// }while(score <=10)
//     // 

// for of loop

// const score = [12 , 43 , 53 , 54 ,43 , 34]

// for (const element of score) {
//     console.log(element);
    
    
// }

// const name = "Akash"
// for (const element of name) {
//     console.log(element);
    
    
// // }
// // maps

// const map = new Map();

// map.set('IN' , "India");
// map.set('USA' ," United State Of America ");
// map.set('FR' , "France");
// map.set('AU' , 'Austria');

// console.log(map);

// // Array Destructure using for of loop p
// for (const [key , values] of map) {
//     console.log(key ,"->", values); 

// }
/*
// For in loop 
const myLoop = {
    js: 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift: 'swift by apple'
}

for (const key in myLoop) {
    console.log(`${key} by ${myLoop[key]}`);
      
 }

 let arr1 = [23 , 45 , 67 , 86 , 24 , 67]

 for (const keys in arr1) {
    console.log(arr1[keys]);
    
  
        
    }
    */
// 
//// //  For Each Loop 
//

const arr1 = [23 , 34 , 42, 543 ,54 , 69]

// arr1.forEach(function (val) {
//     console.log(val);
    
// })

arr1.forEach((vcc)=>{
    console.log(vcc);
    

})
// for each

let coding = [
    {
        fileName: "new.js",
        languageName : "JavaScript"
    },
    {
        fileName: "new.java",
        languageName : "Java"
    },
    {
        fileName: "new.python",
        languageName : "python"
    }
]

coding.forEach((data)=>{
    console.log(`${data.fileName} is made using ${data.languageName} Language`);
    

})

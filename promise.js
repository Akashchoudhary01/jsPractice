// const promise = new Promise((resolve , reject)=>{
//     // use for ----
// // Do an async task
// // cryptoGraphy related
// // network related

// setTimeout( function(){
//     console.log("Async time is complete");
//     resolve();
// } , 1000)
// })

// promise.then(()=>{
//     console.log("Promish Consumed");
    
// })


// new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         console.log("Task 2");
//         resolve();
        
//     } , 3000)
// }).then(()=>{
//     console.log("problem Solver 2");
    
// })

// // 

// const promishThree = new Promise((resolve , reject)=>{
//      setTimeout(()=>{
//         resolve({userName: "Akash" , email : "akashkrchoudhary007@gmail.com"})

//     }, 1000)
// })

// promishThree.then((user)=>{
//     console.log(user);
    
// })

//four

// const PromiseFour = new Promise((resolve , reject)=>{
//     setTimeout(()=>{

//         let error = true;
//         if(!error){
//             resolve({username : "Akashh" , password : "123456"})
//         }else{
//             reject('Error ! Something went wrong !!');
//         }
//     } , 1000)

// })

// PromiseFour
//   .then((user) => {
//     console.log(user);              // { username: 'Akashh', password: '123456' }
//     return user;                    // Pass whole user to next .then()
//   })
//   .then((user) => {
//     console.log(user.password);     // Logs: 123456
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);          // Logs: Akashh
//   })
//   .catch((err) => {
//     console.log(err);
//   }).finally(()=>{
//     console.log('The Promish is either resolved or rejected');
    
//   })


//   PromishFive

const PromiseFive = new Promise((resolve , reject)=>{
    setTimeout(()=>{

        let error = true9;
        if(!error){
            resolve({username : "JavaScript" , password : "123456"})
        }else{
            reject('Error ! Something went wrong !!');
        }
    } , 1000)

});

ConsumePromiseFive = async()=>{
   try {
     const response = await PromiseFive
    console.log(response);

   } catch (error) {
    console.log(error);
    
    
   }
}
ConsumePromiseFive();

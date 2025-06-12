const PromiseFour = new Promise((resolve , reject)=>{
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

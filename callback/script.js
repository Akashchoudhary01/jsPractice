////
//Callback hell example
/**
 * 

function getProfile(name , cb){
    setTimeout(()=>{
     cb({_id: 123 , name , age : 22 , email : "akashkrchoudhary007@gmail.com"})
    } , 3000)
}


function getAllPost(id , cb)
{
    setTimeout(()=>{
        cb({ _id : id , posts : [234 , "sffd" , 432 , "Akash"]})

    } , 3000)

}
getProfile("Akash" , function(data){
    console.log(data);
    getAllPost(data._id , function(posts){
       console.log(posts);
       
    })
    
})
    */

//
//promish
//

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let RN = Math.floor(Math.random() * 10);
    if (RN > 5) res("Resolved with " + RN);
    else rej("Rejected with" + RN);
  }, 3000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});

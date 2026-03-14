let input = document.querySelector("#input");
let count = document.getElementById("count");
input.addEventListener("input" , function(){
    let left = 50 - input.value.length;
    if(left < 0 ){
        count.style.color = "red";
        count.textContent = left

    }else{
         count.style.color = "green";
        count.textContent = left
    }
   
   
    

})
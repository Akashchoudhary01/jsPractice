// let h1 = document.createElement("h1");
// h1.innerText = "Hello World";
// h1.classList.add("hello");


// document.body.appendChild(h1);

// let a = document.createElement("a");
// a.innerHTML = "google"
// a.setAttribute("href" , "https://www.google.com");
// document.body.prepend(a);

// let p = document.querySelector("p");
// p.addEventListener("dblclick" , function(){
//    p.style.color = "red"
// })


// //input
// let input = document.createElement("input");
// document.body.appendChild(input);
// input.addEventListener("input" , function(inp){
//     if(inp.data !==null){

//         console.log(inp.data);
//     }
    
// })

// //change :- change event tab chalta hai jab hum select ya textarea me koi change krte hai 
// let hui = document.getElementById("hui");
// let select = document.querySelector("select");
// select.addEventListener("change" , function(val){
//     console.log(val.target.value);
//     hui.textContent = `${val.target.value} selected `
    
// })

let h1 = document.getElementById("h1");

window.addEventListener("keydown" , function(key){
    console.log(key.key);
    if(key.key === " "){
        h1.textContent = "SPC"
    }else{
        h1.textContent = key.key

    }
    
})
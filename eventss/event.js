let h1 = document.createElement("h1");
h1.innerText = "Hello World";
h1.classList.add("hello");


document.body.appendChild(h1);

let a = document.createElement("a");
a.innerHTML = "google"
a.setAttribute("href" , "https://www.google.com");
document.body.prepend(a);

let p = document.querySelector("p");
p.addEventListener("dblclick" , function(){
   p.style.color = "red"
})
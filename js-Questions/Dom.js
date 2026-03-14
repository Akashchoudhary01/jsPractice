//what is dom how does it represent the HTML document

// dom stand for  document object model it is a programming interface Represent the html document as structure three  of a object  

let h1 = document.querySelector("h1");
h1.innerHTML = "Hello World"

//get attribute , setAttribute , removeAttribute
let a = document.querySelector("a");
a.innerHTML= "google"
console.dir(a);

a.style.color = "green"
a.style.fontSize = "40px"
a.setAttribute(
    "href",
    "https://www.google.com"
)

// create element (append / prepand)
let h2 = document.createElement("h2");
h2.innerHTML = "Jai Shree ram";
h2.style.color = "orange";
document.body.appendChild(h2);

// document.body.prepend(h2); //

//classlist add / remove/toggle

h1.classList.add("hulu");


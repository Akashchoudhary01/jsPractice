let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(ele) {
    ele.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.src = input[3].value;   // profile image url

    let h2 = document.createElement("h2");
    h2.textContent = input[0].value; // name

    let h3 = document.createElement("h3");
    h3.textContent = input[1].value; // age

    let p = document.createElement("p");
    p.textContent = input[2].value; // email

    // appending
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);

    main.appendChild(card); // IMPORTANT (show card)

    form.reset(); // clear form
});
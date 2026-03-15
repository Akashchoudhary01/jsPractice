
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let text = document.querySelector("#text");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailValue = email.value;
    let passValue = password.value;

    if(!emailRegex.test(emailValue)){
        text.innerText = "❌ Invalid Email Format";
        text.style.color = "red";
        return;
    }

    if(!passRegex.test(passValue)){
        text.innerText = "❌ Password must contain 8 characters, uppercase, lowercase, number and special character";
        text.style.color = "red";
        return;
    }

    text.innerText = "✅ Form submitted successfully";
    text.style.color = "green";

});


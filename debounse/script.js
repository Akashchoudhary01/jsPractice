// Ek input element create kar rahe hain
let input = document.createElement("input");

// Is input ko body ke andar add kar diya
document.body.appendChild(input);


// Debounce function banaya — yeh ek wrapper function return karta hai
function debounse(fnc, delay) {

    // timer naam ka variable declare kiya jo timeout id store karega
    let timer;

    // Yeh function return hota hai — actual debounce wala
    return function (...args) {
        // --- Explanation ---
        // Jab bhi function baar baar call hoga,
        // purana timer clear ho jayega (reset hoga)
        clearTimeout(timer);

        // Naya timer set hota hai jo 'delay' ke baad fnc ko call karega
        timer = setTimeout(() => {
            // fnc ko call kar rahe hain aur saare arguments pass kar rahe hain
            fnc(...args);   // IMPORTANT FIX

        }, delay);
    };
}


// Input par event listener lagaya
// Debounced version create kiya 1000ms (1 second) ke delay ke saath
input.addEventListener(
    "input",
    debounse(function (dets) {
        // Yeh function tabhi chalega jab user 1 second tak typing stop karega
        console.log(dets);
    }, 1000)
);
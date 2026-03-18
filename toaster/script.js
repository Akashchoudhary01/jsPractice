document.body.style.backgroundColor = "gray";
document.body.style.padding = "10px";

function createToaster(config){
    return function (str){
        let div = document.createElement("div");

        div.textContent = str;
        div.className = `mb-2 px-6 py-3 rounded shadow-lg pointer-events-none 
        ${config.theme === "dark" ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`;

        const parent = document.querySelector(".parent");

        // Set position
        parent.style.position = "fixed";

        parent.className = "parent " +
            (config.positionX === "right" ? "right-5 " : "left-5 ") +
            (config.positionY === "bottom" ? "bottom-5 " : "top-5 ");

        parent.appendChild(div);

        setTimeout(()=>{  
            parent.removeChild(div);
        }, config.duration * 1000);
    }
}

let toaster = createToaster({
    positionX : "right",
    positionY : "bottom",
    theme : "light",
    duration : 3
});

toaster("Hello :)");
setTimeout(()=>{
  toaster("Hello How Are You ");
}, 3000);
setTimeout(()=>{
  toaster("Akash This Side ! ");
}, 6000);
setTimeout(()=>{
  toaster("Hope you are all well and also doing well ! ");
}, 9000);
setTimeout(()=>{
  toaster("Have A greate day ❤️! ");
}, 12000);
setTimeout(()=>{
  toaster("Bye ❤️! ");
}, 15000);
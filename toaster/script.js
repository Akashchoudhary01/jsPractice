document.body.style.backgroundColor = "gray";
document.body.style.padding = "10px";

function createToaster(config){
    return function (str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block top-5 right-5 ${config.theme === "dark" ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} px-6 py-3 rounded shadow-lg  pointer-event-none transition-duration: 3s`

        document.querySelector(".parent").appendChild(div)

        setTimeout(()=>{  
            document.querySelector(".parent").removeChild(div)
        } ,config.duration*1000);

    }

}

let toaster = createToaster({
    positionX : "right",
    positionY : "top",
    theme : "light",
    duration : 3
})

toaster ("download donee !")
setTimeout(()=>{
  toaster("Hello How Are You ")
} , 2500)
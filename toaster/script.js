document.body.style.backgroundColor = "gray";

function createToaster(config){
    return function (){

    }

}

let toaster = createToaster({
    positionX : "right",
    positionY : "top",
    theme : "dark",
    duration : 3
})

toaster ("download donee !")
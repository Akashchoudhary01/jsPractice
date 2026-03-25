let input = document.createElement("input");
document.body.appendChild(input);

function debounse(fnc , delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
        fnc(args)
        } , delay)
    }

}

input.addEventListener("input" , function(){
    console.log("Hello");
    
})
const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

buttons.forEach((buttons)=>{
    console.log(buttons);
    buttons.addEventListener('click' , function (e){
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id ==='Green'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id ==='red'){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id ==='Yellow'){
            body.style.backgroundColor = e.target.id;
            alert("Yellow background")
        }

    })
    

})
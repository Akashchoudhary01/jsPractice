function createCar(name , model , year , color , speed ){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.speed = speed;
    this.slogan = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.appendChild(h1);
    }
}

let car1 = new createCar("Fortuner" , "legender 4 X 4" , 2026 , "red" , "180");
let text = car1.slogan("The fortuner is headturner");

console.log(car1);

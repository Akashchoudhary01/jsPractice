// Reduce
const array1 = [23 , 43 , 23 , 56 ,78 , 90 , 76 , 68 , 5, 69]
const newNums =array1.filter( array1 => {
    return array1< 10});
// console.log(newNums);


// filter

const language = [23 , 45 , 65 , 76 ,1 , 2 , 42 , 69 , 32]


const newNums1 = language.filter((item)=> item > 15)
newNums1.forEach((num)=>{
    // console.log(num);
    

})
// console.log(newNums1);


const myNums = [2 , 3 , 4 , 5 ,6 ]

const initialValue = 0;

const sumOfNum = myNums.reduce((Accumalator , currentValue)=>{

return  Accumalator+ currentValue     

}, initialValue)
// console.log(sumOfNum);

const shopingCart =[
    {
        itemName: "Smartphone",
        price: 20000
    },
    {
        itemName: "Laptop",
        price: 50000
    },
    {
        itemName: "bike",
        price: 200000
    },
    {
        itemName: "car",
        price: 2000000
    },
    {
        itemName: "home",
        price: 20000000
    },
]

const total = shopingCart.reduce((acc , item) => acc + item.price , 0);
console.log(total);



    


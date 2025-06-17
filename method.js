const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
console.table(descriptor);

const chai = {
    name : "Ginger",
    Price : 23,
    isAvlable : true

}
console.log(Object.getOwnPropertyDescriptor(chai , 'Price'));

Object.defineProperty(chai , "name", {
    writable: false,
    enumerable : false,
});
console.log(Object.getOwnPropertyDescriptor(chai , 'name'));

for (const [key , value] of Object.entries(chai)) {

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        

    }
    
}

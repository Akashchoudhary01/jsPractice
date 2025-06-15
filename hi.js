/**
 * 7⃣Effortlessly Empty an Array

You can empty an array easily by using the length property.

For example:
 */

let number = [1 ,2  ,4 ,52, 6,69,   7, 7,8,]
number.length = 0;
console.log(number);

/** 8
SON.parse()
Use JSON.parse() to convert a JSON string into a JavaScript object, this ensures seamless data manipulation.
 * 
 */


const obj = '{"name" :"Akash" , "Age" : 19}';
const person = JSON.parse(obj);
console.log(person);


/**
 * 9⃣Map() Function

Use the map() function to transform elements in a new array without modifying the original array.

For example:
 */

const number1 = [1 , 2 ,3 ,4 ]
const double = number1.map((nums)=> nums*2);

console.log(number1);
console.log(double);

/**
 * 🔟Object.seal()

You can use Object.seal() method to prevent adding or removing properties in the object.
 */

const personn = {
    Name: 'Akash',
    age: 21
};

Object.seal(personn);

// Trying to add a new property (won't work because object is sealed)
person.profession = 'programmer';  // This line will be ignored silently in non-strict mode

const { Name, age, profession } = personn;
console.log(Name);        // Output: Akash
console.log(age);         // Output: 21
console.log(profession);  // Output: undefined


/**
 * 1⃣1⃣Object.freeze()

You can use Object.freeze() method to prevent any changes to an object, including adding, modifying or deleting properties
 */
const student = {
    Name: 'Rishu',
    age: 20
};
Object.freeze(student);

// Trying to modified the  property (won't work because object is Freeze)
student.Name = 'Akku';
console.log(student.Name);        // Output: Akash
console.log(student.age);         // Output: 21
console.log(student.profession);  // Output: undefined

/**
 * 1⃣2⃣Remove Array Duplicates

You can remove duplicate elements from an array using Set.
 */

const ArrayWithDuplicates = [1 , 2 , 2 ,4 ,5 ,5 ,4 ,3 ,6 ,7 ,8 ,7 ,6, 5, 8];
const ArrayWithoutDuplicates = [...new Set(ArrayWithDuplicates)];

console.log(ArrayWithDuplicates);
console.log(ArrayWithoutDuplicates);


/**
 * 1⃣3⃣Swap values using Destructuring

You can swap two variables easily using destructuring.

For example:
 */

let x = 7 , y = 18;
[x , y] = [y , x]
console.log(x);
console.log("");



/**
 * 1⃣4⃣Spread Operator

You can copy or merge arrays efficiently using the spread operator.

For example:
 */

const Arr1 = [1 ,2 ,4 , 5, 6, 7, 8];
const Arr2 = [1 ,2 ,4 , 52, 69, 7, 8];

const Arr3 = [...Arr2];

const MergedArr = [...Arr1 , ...Arr2];
console.log(Arr3);
console.log(MergedArr);  //print the Merged Array
console.log([...new Set(MergedArr)]);   // print the Merged Array and also remove the duplicate element




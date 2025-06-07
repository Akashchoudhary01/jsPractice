/**
 * 1. Sum of Two Numbers
Question:
Write a JavaScript function addNumbers(a, b) that takes two numbers and returns their sum.
 */

function  addTwoNum(a , b){
     result =  a+b;
     console.log(result);
}
addTwoNum( 5, 6);

/**
 * 2. Factorial of a Number
Question:
Create a function factorial(n) that returns the factorial of a given non-negative integer n.
Example: factorial(5) should return 120.
 */

function factorial(num){
    if(num === 0 || num === 1) return 1;
    return num * factorial(num-1);    
}
console.log(factorial(5));


/**
 * 3. Check for Palindrome
Question:
Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same backward as forward).
Example: isPalindrome("madam") should return true.
 */

function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;


}
console.log(isPalindrome('Akash'));
console.log(isPalindrome('madam'));

/**
 * 4. Find the Largest Number in an Array
Question:
Write a function findMax(arr) that takes an array of numbers and returns the largest number.
Example: findMax([3, 7, 2, 9]) should return 9.
 */

function findMax(arr){
    const max = Math.max(...arr);
    console.log(max);
    
}
findMax([3 , 7 , 3 , 9]);

/**
 * 5. Count Vowels in a String
Question:
Create a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a given string.
Example: countVowels("JavaScript") should return 
 */
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels('Akash'));


/**
 * 6. Reverse a String
Question:
Write a function reverseString(str) that takes a string and returns it reversed.
Example: reverseString("hello") should return "olleh".


 */

function reverseString(str){
    const reverse = str.split('').reverse().join('');
    console.log(reverse);
    
}
reverseString('Akash');

/*
7. Check for Prime Number
Question:
Create a function isPrime(num) that checks if a number is a prime number.
Example: isPrime(7) should return true.
*/

function isPrime(num){
  if(num <= 1) return false;
  for(let i = 2; i<=Math.sqrt(num); i++){
    if(num % i === 0) return false;
  } 
  return true;
}
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(10));

// how to detact the Array / object is empty or not
const arr1 = [];
if(arr1.length ===0 ){
    console.log("is Empty");
    
}else{
    console.log("TMKc");
    
}

const obj= {"name": "Akash"}
if(Object.keys(obj).length ===0){
    console.log("obj is Empty");
    
}else{
    console.log("TMKc");
    
}
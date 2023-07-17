/*
1. Reverse String.

The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay 
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of 
2 seconds before reversing the string. The reversed string should then be printed as output.
*/



let input =  "The problem is to create a program that uses";

let string_into_array = input.split("");
let reversedArray = string_into_array.reverse();

function reverseString(){
    console.log(reversedArray.join(""));
}

let reversed_string = setTimeout(reverseString, 2000);
console.log(reversed_string);

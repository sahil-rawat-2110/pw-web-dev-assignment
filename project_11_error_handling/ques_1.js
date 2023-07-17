// 1. Type Conversion.


// Write a function called convertToNumber that takes a string as an argument and returns the equivalent 
// number. If the string cannot be converted to a number, the function should return the string "Invalid number". 
// Use error handling in javascript to achieve this output.





function convertToNumber(str){
    try{
        const num = parseFloat(str);
        if(isNaN(num)){
            throw new Error("Invalid number");
        }
        return num;
    }
    catch(error){
        return error.message;

    }

}

const input = "123";
const result = convertToNumber(input);  
console.log(result);

const input2 = "abc";
const result2 = convertToNumber(input2);
console.log(result2);

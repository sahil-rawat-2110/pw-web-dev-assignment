/*
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.

const person = {
  name: "Pankaj",
  age: 26,
  address: {
    street: "Ranchi Road",
    city: "Ranchi",
    state: "Jharkhnad",
  },
};

*/

function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
}
const person = {
    name: "Pankaj",
    age: 26,
    address: {
      street: "Ranchi Road",
      city: "Ranchi",
      state: "Jharkhnad",
    },
  };
  
  const { name, street } = extractNameAndStreet(person);
  console.log(name);    // Output: "Pankaj"
  console.log(street);  // Output: "Ranchi Road"
  
  
// 1. Count the occurrences.

// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.

function wordCount(string) {
    // split the string into individual words
    const words = string.split(" ");
  
    // create a map to store the word counts
    const wordCounts = new Map();
  
    // iterate over each word
    for (const word of words) {
      // if the word is not already in the map, add it with a count of 1
      if (!wordCounts.has(word)) {
        wordCounts.set(word, 1);
      }
      // if the word is already in the map, increment its count by 1
      else {
        const count = wordCounts.get(word);
        wordCounts.set(word, count + 1);
      }
    }
  
    // return the map of word counts
    return wordCounts;
  }

const string = "the quick brown fox jumps over the lazy dog";
const counts = wordCount(string);
console.log(counts);


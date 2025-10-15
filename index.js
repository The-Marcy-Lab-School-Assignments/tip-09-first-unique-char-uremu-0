/**
 * Write a function named firstUniqChar that takes a string (s) as input and returns 
 * the index of the first non-repeating character. If no such character exists, return -1.
 *
 * Problem: Given a string s, find the first non-repeating character and return its index.
 * If no such character exists, return -1.
 *
 * Examples:
 * - firstUniqChar("leetcode") → 0
 * - firstUniqChar("loveleetcode") → 2  
 * - firstUniqChar("aabb") → -1
 */

const firstUniqChar = (s) => {

};

// Export the function for testing
module.exports = { firstUniqChar };

// Example usage (commented out to avoid interference with tests)
// console.log(firstUniqChar("leetcode")); // → 0
// console.log(firstUniqChar("loveleetcode")); // → 2
// console.log(firstUniqChar("aabb")); // → -1





//"hello world hello" -> {"hello":2, "world": 1}
const countWordFrequency = (sentence) => {
    // Split the sentence into an array of words
    // "hello world" -> ["hello", "world", "hello"]
    const words = sentence.split(" ");

    // Create frequency object to store { word: frequency } pairs
    const frequency = {};
    // defines starting point, ending condition, increment, iterates through every word
    for (let i = 0; i < words.length; i++) {

        // the value of words[i] is being set equal to "word"
        const word = words[i];

        // if frequency of word is equal to undefined, then it will create that key and will equal it to 1
        if (frequency[word] === undefined) {
            // add word to frequency object with the value of 1
            frequency[word] = 1;
        } else {
            // if the word is already in frequency then add 1 to the value
            frequency[word]++;
        }
    }
    // for loop ended, returning the the frequency object
    return frequency;
};

// Test the function
console.log(countWordFrequency("hello world hello"));
console.log(countWordFrequency("the cat and the hat"));
// { the: 2, cat: 1, and: 1, hat: 1 }
// Challenge 1
// Start with an array of strings.Then, print only the words with 3 characters.

var arry = ["cat","bat", "dog", "parrot", "chicken", "hen", "butterfly"]

console.log(arry.filter(word => word.length == 3))
function threeChar(word){
  if(word.length === 3){
    return word
  }
}
console.log(arry.filter(threeChar))

// Challenge 2
// Start with an array of strings.Print only the words that start with the letter s.
arry2 = ["top", "start", "bottom", "stop", "likes", "nestled", "Stomp"]

console.log(arry2.filter((word) => word.toLowerCase().startsWith("s")))

// Challenge 3
// Start with an array of strings.Print all of the words in the array, but change every t to an uppercase T.

console.log(arry2.map(word => word.replaceAll('t', 'T')))


// Challenge 4
// What if we wanted to write a method or function to achieve the same goal for Challenges 1 - 3 ? This would allow us to reuse that code over and over for any array! Use your Problem Solving steps to go back and refactor your solutions.

// Challenge 1 as function
function charCount(array, count = 3) {
  return array.filter(word => word.length >= count)
};
console.log(charCount(arry))

// Challenge 2 as function
function startsWithS(array){
  return array.filter((word) => word.toLowerCase().startsWith("s"))
}
console.log(startsWithS(arry2))

// Challenge 3 as function
let capT = (array) => array.map(word => word.replaceAll('t', 'T'))

console.log(capT(arry2))

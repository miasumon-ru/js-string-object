// Task-5:
// Capitalize Every first Letter of each word in a String

// let sentence = 'Capitalize Every first Letter of each word in a String';
// let word = sentence.split(' ')
// let position = word[1]
// console.log(position[0])
// // console.log(word[1])

// for (let i = 0; i < word.length ; i++){
//      position = word[i]
//   console.log(position[0].toUpperCase())
//   console.log(word)
// }

// let input = "capitalize every first letter of each word";
// let words = input.split(" ");
// let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// let output = capitalizedWords.join(" ");
// console.log(output); // Output: "Capitalize Every First Letter Of Each Word"


let input = ' hi , i am sumon'
let word = input.split(' ')
let capitalizedWord  = word.map(word=> word.charAt(0).toUpperCase() + word.slice (1) )
let output = capitalizedWord.join(' ')

console.log(output)


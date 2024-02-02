// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
let sentence = 'arahimou';
let letter = sentence.split('');
// console.log(letter.includes('a'));
let isA = letter.includes('a');
let isE = letter.includes('e');
let isI = letter.includes('i');
let isO = letter.includes('o');
let isU = letter.includes('u');

if(isA == true && isE == true && isI == true && isO == true && isU == true ){
    console.log('all the vowel are found in this word');
}
else{
    console.log(' Sorry ! all the vowels are not found in this word');
}

// console.log(letter);
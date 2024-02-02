// Task-2:
// Count how many times a string has the letter a or A

let sentence = 'Count how many times a string has the letter a or A';
var a = 'a';
var A = 'A';
var numberOfSmallA = [];
var numberOfCapitalA = [];

for (let i = 0; i<sentence.length; i++){
    let letter = sentence[i];
    if (letter == a){
        numberOfSmallA.push(a);
    }
    else if (letter == A){
        numberOfCapitalA.push(A);
    }
}

console.log('the number of small a is :' , numberOfSmallA.length);
console.log('the number of capital a is :' , numberOfCapitalA.length);

// console.log(numberOfSmallA);
// console.log(numberOfCapitalA);

// revers string three different ways

// const sentence = ' I am learning web devlopment';

//  let reverse;

//  reverse with for ... of loop
// for (const letter of sentence){
   
//      reverse = letter + reverse;
 
// }

// console.log(reverse);

// reverse with for loop

const sentence = ' I am learning web devlopment';

let rev = '';

for ( i = 0; i<sentence.length; i++){
    console.log(i);

    letter = sentence[i];
    rev = letter + rev;

}
 console.log(rev);
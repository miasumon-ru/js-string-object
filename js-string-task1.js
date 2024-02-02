// Task-1:
// Count how many times a string has the letter 'a'

var sentence = 'Count how many times a string has the letter';
var getLetter ;
var a = 'a';
var number = [] ;

for (let i = 0; i<sentence.length ; i++){
   getLetter = sentence[i];
//    console.log(getLetter);

   if (getLetter == a){

    number.push(a);
   
}
}

console.log('the number of a is :', number.length);



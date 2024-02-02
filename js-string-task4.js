// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

var word = 'Coxbaxzar';
// console.log(word.includes('b'))
// var letter = word.split('')
// console.log(letter);
// let isX = letter.includes('x');
// // console.log(isX)
// console.log(isX)
// console.log(word[2]);


    // if (isX== true){
    //     let indexNumber = letter.indexOf('x');
    //     console.log(indexNumber);
    //       letter[indexNumber] = 'y';
    
    
    //     console.log(letter);
    
    //      var letter = letter.join('')
    //      console.log(letter)
    // }




// console.log(word.indexOf('x'));



// let letter = word.split('');


// console.log(letter);

// let text = "Hello world, welcome to the universe.";
// let result = text.includes('w');

// console.log(result);


// let input = "coxxbaxarX";
// let output = input.replace(/x/gi, 'y').replace(/X/g, 'Y');
// console.log(output); // Output: "This is an Example with Y and y"

let input = "coxxxxxovavayyyY"
let output = input.replace(/x/gi, 'y').replace(/X/g, 'Y')

console.log(output)



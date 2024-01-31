const school = 'Raj UK Uttora Model High School';
const book = 'Chemistry';
const subject = 'chemistry';

// if (book === subject){
//     console.log('i am learnig ');
// }
// else{
//     console.log('hudai hudai prista ultai');

    // although the name is same , there is difference. as js is case sensitive , here the condition is false
// }

// so avoid this defect, we have to do upper or lowercase of the letter of every string or words




if (book.toLowerCase() === subject.toLowerCase()){
    console.log('i am learnig ');
}
else{
    console.log('hudai hudai prista ultai');

    // although the name is same , there is difference. as js is case sensitive , here the condition is false
}

// so we can say that toLowerCase and toUpperCase is used to compare a string


// the use of trim
const drink= 'water   ';
const liquid = '    water';
if (drink.trim() === liquid.trim()){

    // we have to use the trim method to remove the blank space of a string . it is notable that it does not remove the space in the middle of a string.
    console.log('life');
}
else{
    console.log('somudro');
}



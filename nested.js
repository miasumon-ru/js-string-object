
const college = {
    name : 'vnc',
    class : ['10', '11'],
    events : ['science fair', 'bijoy dibos'],
    unique : {
        color : 'blue',
        result : {
            gpa : 5,
            merit : 'top top most'
        }
    }
}

// console.log(college);

// accessing by dot notation for nested object

// console.log(college.unique.color);
// console.log(college.unique.result.gpa);

 const colour = college['unique']['color'];
 console.log(colour);

 console.log(college['unique']['result']['merit']);

 console.log(college);

 delete college.class;
 
 console.log(college);


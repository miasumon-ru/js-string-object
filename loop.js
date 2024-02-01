//  loop an object and ways to declare an object

const mobile = {
    brand : 'samsung',
    price : 25000,
    color : 'black',
    camera : '12 mp'
}
// console.log(mobile);

// loop with for .... in 

// for ( const key in mobile){

//     console.log(key);
//     console.log(mobile[key])

// }

//  for .... of > it is used in array
// for ..... in > it is used in object

// loop with Object.keys() method

let keys = Object.keys(mobile);

// using for of loop as now keys is an array
for (key of keys ){
    console.log(key);
    console.log(mobile[key]);
}



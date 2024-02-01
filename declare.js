//  an object can be declared in three ways 

// number one with literal

const pen = {
    brand : 'econo',
    price  : 10,
    colour : 'black'
}

// number two with new
const pencil = new Object();
console.log(pencil);


//  using create 

const rubber = Object.create({});
console.log(rubber);
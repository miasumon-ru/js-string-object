// multiple ways to get , set object properties

const person = {
    name : 'sadar',
    age : 25,
    profession : 'developer',
    salary : 25000,
    isMarried : true
}

// console.log(person);

// dot notation and bracket notation are necessary to access a property of an object

// // dot notation
// console.log(person.profession);
// console.log(person.age);
// console.log(person.salary);

// bracket notation

const boyos = person['age']
console.log(boyos);


// console.log(person['profession']);
// console.log(person['salary']);
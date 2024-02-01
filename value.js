// value update , change and modify of an object of javascript

// with dot notation

const person = {
    name : 'sadar',
    age : 25,
    profession : 'developer',
    salary : 25000,
    isMarried : true
}

// let modifiedSalary = person.salary = 30000;
// let modifiedAge = person.age = 35;
// console.log(modifiedSalary);
// console.log(modifiedAge);
// console.log(person);

// with bracket notation
  let modifiedProfession = person['profession'] = 'full stack webdevloper';

  console.log(modifiedProfession);

  const keyName = 'profession'; 
  console.log(person);






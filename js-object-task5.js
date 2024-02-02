// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}


// let keys = Object.keys(myObject)
// let values = Object.values(myObject)

// for (let key of keys){
//     console.log ('key :', key)
// }
// for(let value of values){
//     console.log('value :', value)
// }
// let joiin = keys.join(values)
// console.log(joiin)


for (let keys in myObject){
    console.log(`keys : ${keys}  |  value : ${myObject[keys]} `)
}


// let obj = {
//     key1: "value1",
//     key2: 123,
//     key3: true,
//     key4: ["a", "b", "c"],
//     key5: { nestedKey: "nestedValue" }
//   };
  
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       console.log(`Key: ${key}, Value: ${obj[key]}, Type: ${typeof obj[key]}`);
//     }
//   }
  
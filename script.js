console.log("Explore API");

const person = {
  name: 'Minhajul',
  age: 23,
  university: 'Jagannath',
  department: 'CSE',
  hobby: 'Programming',

};

// console.log(person);

//JSON--> javaScript object with notation
//JSON.stringify

const personJSON = JSON.stringify(person);
// console.log(personJSON);
// console.log(typeof personJSON);

// JSON.parse
const persons = JSON.parse(personJSON);
console.log(persons);


//destructuring data: extracting data fro nested objects and arrays

const person = {
    name: 'John Doe',
    age: 25,
    address:{
        city: "New York",
        country: 'USA'
    }
}

const {name,age,address:{city,country}} = person;

console.log(person.name)//accessing object propertievia dot notation
console.log(name);
console.log(age);
console.log(city);
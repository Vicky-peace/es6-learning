//Spread operator is used to expand an array into a list of arguments


//lets use spread to copy an array into another array
const numbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = [...numbers, 11,12,13,14,15]

console.log(newNumbers)

//lets use spread to copy an Object to another Object

let person ={
    name: 'John',
    age: 20,
    location: 'New York'
}

let student = {
    ...person,
    course: 'Computer Science',
    university: 'MIT',
    grade: 'A'
}

console.log(student)
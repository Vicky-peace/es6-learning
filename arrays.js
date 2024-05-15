// const numbers = [1,2,3,4,5,6,7,8,9];

// numbers.forEach(consoleItem);

// function consoleItem(item, index , arr){
//     console.log(item)
// }


//filter method : The filter method is used to create a new array with elements that pass a certain test defined by a callback function
const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000},
    {name: "Keyboard", price: 25}
]

const filteredItems = items.filter((item) =>{
    return item.price <= 100;
})
console.log(filteredItems);


const numbers = [1,2,3,4,5,6,7,8,9];

//Filtering even numbers
const evenNumbers = numbers.filter((num) =>{
      return num % 2 === 0;
})
console.log(evenNumbers);


//map method: creates a new array by applying a function to each element of an existing array
const itemNames = items.map((item) =>{
    return item.name;
})
console.log(itemNames)

//find(): 
const foundItem = items.find((item) => {
    return item.name === "Book"
});
console.log(foundItem);


//for each..
items.forEach((item) =>{
          console.log(item.price)
    })


    //reduce()
    const total = items.reduce(( currentTotal, item) =>{
        return item.price + currentTotal
    }, 0)

    console.log(total);


    //Inbuilt loop methods
    const nums = [1,2,3,4,5]
    //map in js
    const newNum = nums.map((item, index,array) => {
        return item;
    });
    console.log(newNum)
